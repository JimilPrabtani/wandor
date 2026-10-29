// Single source of truth for prompt-only trip parsing.
// "7-day trip to Japan" -> { destination: "Japan", days: "7" }
// Used by Hero + AiGenerator so the user only ever types one chat box.

const NUMBER_WORDS: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
};

const STOPWORDS = new Set([
  'my', 'the', 'a', 'an', 'this', 'that', 'next', 'last',
  'october', 'november', 'december', 'january', 'february', 'march',
  'april', 'may', 'june', 'july', 'august', 'september',
]);

function cleanPlace(raw: string): string {
  return raw
    .trim()
    .replace(/\s+(in|for|with|and|with\s+a|for\s+a)$/i, '')
    .replace(/[.,!;:]+$/g, '')
    .trim();
}

export function parseTripPrompt(text: string): { destination: string; days: string } {
  const input = String(text ?? '');
  const lower = input.toLowerCase();
  let days = '';

  // 1) Explicit digit durations: "7-day", "7 days", "for 5 days", "10 day"
  const dayMatch = lower.match(/(\d{1,2})\s*-?\s*days?/);
  if (dayMatch) {
    days = dayMatch[1];
  } else {
    // 2) Week-based: "2 weeks", "two weeks", "a week"
    const weeksDigit = lower.match(/(\d{1,2})\s*-?\s*weeks?/);
    if (weeksDigit) {
      days = String(Math.min(30, Number(weeksDigit[1]) * 7));
    } else {
      const weeksWord = lower.match(
        /\b(one|two|three|four)\s*-?\s*weeks?\b/
      );
      if (weeksWord && NUMBER_WORDS[weeksWord[1]]) {
        days = String(Math.min(30, NUMBER_WORDS[weeksWord[1]] * 7));
      } else if (/fortnight|two weeks|2 weeks/.test(lower)) {
        days = '14';
      } else if (/\bweekend\b/.test(lower)) {
        days = '2';
      } else if (/\ba week\b|\bone week\b/.test(lower)) {
        days = '7';
      } else {
        // 3) Number words + day: "seven days", "five-day"
        const wordDay = lower.match(
          /\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen)\s*-?\s*days?\b/
        );
        if (wordDay && NUMBER_WORDS[wordDay[1]]) {
          days = String(NUMBER_WORDS[wordDay[1]]);
        }
      }
    }
  }

  // 4) Destination: prefer Capitalized place after a travel preposition.
  // Handles: "to Japan", "in Paris", "into Egypt", "for New York City", "in New Zealand"
  let destination = '';
  const capPatterns = [
    /\b(?:trip to|travel to|going to|fly to|visiting|visit|explore|exploring|discover|discovering|into|to|in|for|at)\s+([A-Z][a-zA-Z\-']+(?:\s+[A-Z][a-zA-Z\-']+){0,2})/,
  ];
  for (const re of capPatterns) {
    const m = input.match(re);
    if (m?.[1]) {
      const cleaned = cleanPlace(m[1]);
      const first = cleaned.split(/\s+/)[0]?.toLowerCase() ?? '';
      if (cleaned.length >= 2 && cleaned.length <= 40 && !STOPWORDS.has(first)) {
        destination = cleaned;
        break;
      }
    }
  }

  // 5) Fallback: case-insensitive capture for lowercase input ("7 days in japan")
  if (!destination) {
    const fallback =
      input.match(
        /\b(?:trip to|going to|travel to|visit(?:ing)?|explore|exploring|into|to|in|for)\s+([a-zA-Z][a-zA-Z\s\-']{1,39}?)(?:\s+in\s|\s+for\s|\s+with\s|\s+and\s|[.,!]|$|\s+\d)/i
      );
    if (fallback?.[1]) {
      const cleaned = cleanPlace(fallback[1]);
      const first = cleaned.split(/\s+/)[0]?.toLowerCase() ?? '';
      // Avoid capturing verbs/adjectives ("a relaxing weekend", "the best")
      if (
        cleaned.length >= 2 &&
        cleaned.length <= 40 &&
        !STOPWORDS.has(first) &&
        !/^(relaxing|best|great|action|family|romantic|cultural|culinary|hidden)$/i.test(first)
      ) {
        destination = cleaned;
      }
    }
  }

  return { destination, days };
}

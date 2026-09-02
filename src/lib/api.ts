// Typed helper for the same-origin /api backend.

export interface ItineraryDay {
  day: number;
  theme: string;
  morning: string;
  afternoon: string;
  evening: string;
  food: string[];
}

export interface Itinerary {
  title: string;
  summary: string;
  budgetEstimate: string;
  insiderTips: string[];
  days: ItineraryDay[];
}

export interface ApiTrip {
  sk: string;
  destination: string;
  days: number;
  preferences?: string;
  provider?: string;
  createdAt: string;
  itinerary: Itinerary;
}

export class ApiError extends Error {
  status: number;
  code?: string;
  limit?: number;

  constructor(status: number, code?: string, limit?: number) {
    super(code || `Request failed (${status})`);
    this.status = status;
    this.code = code;
    this.limit = limit;
  }
}

export async function apiFetch<T>(
  path: string,
  opts: { method?: string; body?: unknown },
  getIdToken: () => Promise<string | null>
): Promise<T> {
  const token = await getIdToken();
  if (!token) throw new ApiError(401, 'not_authenticated');

  const res = await fetch(path, {
    method: opts.method || 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      ...(opts.body !== undefined ? { 'Content-Type': 'application/json' } : {}),
    },
    body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
  });

  let data: any = null;
  try {
    data = await res.json();
  } catch {
    // non-JSON body — leave data null
  }

  if (!res.ok) {
    throw new ApiError(res.status, data?.error, data?.limit);
  }
  return data as T;
}

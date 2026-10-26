// Frontend config — only ONE env value (the public Google OAuth client id).
// Everything else below is a fixed app default, not env.
export const GOOGLE_CLIENT_ID = (import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '') as string;

export const googleClientId = GOOGLE_CLIENT_ID;

// Fixed defaults (not env — same in every environment).
export const TOKEN_KEY = 'wandor_google_id_token';
export const GIS_SRC = 'https://accounts.google.com/gsi/client';
export const AVATAR_BASE = 'https://api.dicebear.com/7.x/avataaars/svg';
export const API_GENERATE_PATH = '/api/trips/generate';
export const API_TRIPS_PATH = '/api/trips';
export const MAX_TRIP_DAYS = 30;

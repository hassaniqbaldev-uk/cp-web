// lib/spamConfig.js
// Shared between the forms (client) and the API routes (server).

// Hidden input name. Real users never see it, bots fill every field.
// Kept neutral on purpose so browser autofill doesn't touch it.
export const HONEYPOT_FIELD = "hp_confirm";

// Anything submitted faster than this (ms after the form mounted) is a bot.
export const MIN_FILL_TIME = 3000;

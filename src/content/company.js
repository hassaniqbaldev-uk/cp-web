// Single source of truth for the company's founding date and age.
//
// CreativePixels was founded in DECEMBER 2013. The CP-00 audit found four drifting versions of this
// across the site ("Established in 2018", "over a decade", "over 10 years", "over 7 years", "Since 2014").
// Every age/founding claim now reads from here so it cannot drift again — change it in one place only.

export const FOUNDED_YEAR = 2013;
export const FOUNDED_MONTH = 12; // December

// Full years in business, derived from the founding date so the number never goes stale.
// December 2013 -> 12 years as of 2026; it ticks to 13 in December 2026 on the next rebuild.
export function yearsInBusiness(now = new Date()) {
  const monthNow = now.getMonth() + 1; // getMonth() is 0-indexed
  const beforeAnniversary = monthNow < FOUNDED_MONTH;
  return now.getFullYear() - FOUNDED_YEAR - (beforeAnniversary ? 1 : 0);
}

export const YEARS_IN_BUSINESS = yearsInBusiness();

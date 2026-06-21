export interface SiteConfig {
  slug: string;
  domain: string;
  name: string;
  shortName: string;
  description: string;
  dbEnvVar: string;
  smtpUserEnvVar: string;
  smtpPassEnvVar: string;
  smtpFromEnvVar: string;
  r2BucketEnvVar: string;
  r2PublicUrlEnvVar: string;
  nextauthSecretEnvVar: string;
}

const sites: Record<string, SiteConfig> = {
  ejlilejgp: {
    slug: 'ejlilejgp',
    domain: 'ejlilejgp.com',
    name: 'European Journal of Law, Interdisciplinary Legal Ethics and Jurisprudence Governance Practices',
    shortName: 'EJLILEJGP',
    description: 'Law, Legal Ethics and Jurisprudence Governance Research',
    dbEnvVar: 'DATABASE_URL_EJLILEJGP',
    smtpUserEnvVar: 'SMTP_USER_EJLILEJGP',
    smtpPassEnvVar: 'SMTP_PASS_EJLILEJGP',
    smtpFromEnvVar: 'SMTP_FROM_EJLILEJGP',
    r2BucketEnvVar: 'R2_BUCKET_EJLILEJGP',
    r2PublicUrlEnvVar: 'R2_PUBLIC_URL_EJLILEJGP',
    nextauthSecretEnvVar: 'NEXTAUTH_SECRET_EJLILEJGP',
  },
};

const DEV_SITE_SLUG = 'ejlilejgp';

export function getSiteConfig(slug: string): SiteConfig | null {
  return sites[slug] ?? null;
}

export function getSiteConfigByDomain(host: string): SiteConfig | null {
  const domain = host.split(':')[0];

  for (const site of Object.values(sites)) {
    if (site.domain === domain) return site;
  }

  if (domain === 'localhost' || domain === '127.0.0.1') {
    return sites[DEV_SITE_SLUG];
  }

  return null;
}

export function getAllSites(): SiteConfig[] {
  return Object.values(sites);
}

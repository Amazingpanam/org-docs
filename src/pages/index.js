import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Internal Documentation Portal"
      description="Enterprise-grade knowledge base for Cloud, DevOps, Security, and Onboarding"
    >
      <main style={styles.page}>

        {/* HEADER / HERO */}
        <section style={styles.hero}>
          <div style={styles.badge}>
            Enterprise Documentation System
          </div>

          <h1 style={styles.title}>
            Cloud & DevOps Knowledge Hub
          </h1>

          <p style={styles.subtitle}>
            A centralized, scalable documentation platform for infrastructure,
            deployment workflows, onboarding, and security operations.
          </p>

          <div style={styles.cta}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
            </Link>

            <Link className="button button--secondary button--lg" to="/docs/intro">
              Browse Documentation
            </Link>
          </div>

          <div style={styles.meta}>
            <span>⚡ CI/CD Enabled</span>
            <span>☁ Azure Static Web Apps</span>
            <span>🔐 Secure by Design</span>
          </div>
        </section>

        {/* DASHBOARD CARDS */}
        <section style={styles.grid}>

          <Link style={styles.card} to="/docs/cloud/azure-basics">
            <h3>☁ Cloud Engineering</h3>
            <p>Azure services, architecture patterns, and cloud fundamentals.</p>
            <span style={styles.tag}>Azure • AWS</span>
          </Link>

          <Link style={styles.card} to="/docs/devops/ci-cd">
            <h3>⚙ DevOps & Automation</h3>
            <p>CI/CD pipelines, Docker, Kubernetes, Terraform, and IaC workflows.</p>
            <span style={styles.tag}>CI/CD • GitHub Actions</span>
          </Link>

          <Link style={styles.card} to="/docs/onboarding/new-staff">
            <h3>👥 Onboarding</h3>
            <p>Standardized setup guides for new engineers and internal systems.</p>
            <span style={styles.tag}>Processes</span>
          </Link>

          <Link style={styles.card} to="/docs/security/access-control">
            <h3>🔐 Security & Compliance</h3>
            <p>Access control, policies, backup strategies, and incident response.</p>
            <span style={styles.tag}>Zero Trust</span>
          </Link>

        </section>

        {/* FOOTER STRIP */}
        <section style={styles.footer}>
          <p>
            Built with Docusaurus • Deployed on Azure Static Web Apps • CI/CD via GitHub Actions
          </p>
        </section>

      </main>
    </Layout>
  );
}

/* STYLES */
const styles = {
  page: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 1.5rem',
    textAlign: 'center',
  },

  hero: {
    marginBottom: '4rem',
  },

  badge: {
    display: 'inline-block',
    padding: '6px 12px',
    fontSize: '0.8rem',
    borderRadius: '20px',
    background: '#eef2ff',
    color: '#3730a3',
    marginBottom: '1rem',
    fontWeight: 600,
  },

  title: {
    fontSize: '3rem',
    fontWeight: 800,
    marginBottom: '1rem',
  },

  subtitle: {
    fontSize: '1.2rem',
    maxWidth: '750px',
    margin: '0 auto 2rem',
    opacity: 0.85,
    lineHeight: 1.6,
  },

  cta: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '1.5rem',
  },

  meta: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    fontSize: '0.9rem',
    opacity: 0.75,
    flexWrap: 'wrap',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.5rem',
    marginTop: '3rem',
  },

  card: {
    textAlign: 'left',
    padding: '1.5rem',
    borderRadius: '14px',
    border: '1px solid #e5e7eb',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.25s ease',
    background: '#fff',
  },

  tag: {
    display: 'inline-block',
    marginTop: '1rem',
    fontSize: '0.75rem',
    padding: '4px 8px',
    borderRadius: '10px',
    background: '#f3f4f6',
  },

  footer: {
    marginTop: '4rem',
    fontSize: '0.85rem',
    opacity: 0.7,
  },
};

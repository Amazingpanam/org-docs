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
        <section style={styles.hero}>
          <div style={styles.badge}>
            Enterprise Documentation System
          </div>

          <h1 style={styles.title}>
            Cloud & DevOps Knowledge Hub
          </h1>

          <p style={styles.subtitle}>
            A centralized knowledge base for cloud infrastructure,
            DevOps processes, onboarding, and security operations.
          </p>

          <div style={styles.cta}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Get Started
            </Link>
          </div>
        </section>

        <section style={styles.grid}>
          <Link style={styles.card} to="/docs/cloud/azure-basics">
            <h3>☁ Cloud Engineering</h3>
            <p>Azure services, architecture patterns, and cloud fundamentals.</p>
            <span style={styles.tag}>Azure • AWS</span>
          </Link>

          <Link style={styles.card} to="/docs/devops/ci-cd">
            <h3>⚙ DevOps & Automation</h3>
            <p>CI/CD pipelines, Docker, Kubernetes, and Terraform.</p>
            <span style={styles.tag}>CI/CD • GitHub Actions</span>
          </Link>

          <Link style={styles.card} to="/docs/onboarding/new-staff">
            <h3>👥 Onboarding</h3>
            <p>Guides and processes for new team members.</p>
            <span style={styles.tag}>Processes</span>
          </Link>

          <Link style={styles.card} to="/docs/security/access-control">
            <h3>🔐 Security & Compliance</h3>
            <p>Access control, backup policies, and incident response.</p>
            <span style={styles.tag}>Zero Trust</span>
          </Link>
        </section>
      </main>
    </Layout>
  );
}

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
    justifyContent: 'center',
    marginBottom: '2rem',
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
    border: '1px solid rgba(34, 197, 94, 0.35)',
    textDecoration: 'none',
    color: '#eaffea',
    background: 'linear-gradient(135deg, #052e1b, #0b3d2e)',
    transition: 'all 0.25s ease',
  },

  tag: {
    display: 'inline-block',
    marginTop: '1rem',
    fontSize: '0.75rem',
    padding: '5px 10px',
    borderRadius: '999px',
    background: 'rgba(34, 197, 94, 0.15)',
    color: '#86efac',
    border: '1px solid rgba(34, 197, 94, 0.35)',
    fontWeight: 500,
  },
};

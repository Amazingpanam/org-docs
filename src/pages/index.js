import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Internal Documentation Portal"
      description="Central knowledge base for DevOps, Security, and Onboarding"
    >
      <main style={styles.container}>

        {/* HERO SECTION */}
        <section style={styles.hero}>
          <h1 style={styles.title}>
            Internal Documentation Portal
          </h1>

          <p style={styles.subtitle}>
            A centralized knowledge base for onboarding, DevOps processes,
            cloud infrastructure, and security practices. Built to improve
            consistency, collaboration, and operational efficiency across teams.
          </p>

          <div style={styles.buttonGroup}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
            </Link>

            <Link className="button button--secondary button--lg" to="/docs">
              Explore Docs
            </Link>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section style={styles.grid}>

          <Link style={styles.card} to="/docs/cloud/azure-basics">
            <h3>☁ Cloud Infrastructure</h3>
            <p>Azure services, architecture, and cloud fundamentals.</p>
          </Link>

          <Link style={styles.card} to="/docs/devops/ci-cd">
            <h3>⚙ DevOps & Automation</h3>
            <p>CI/CD pipelines, Docker, Kubernetes, and Terraform workflows.</p>
          </Link>

          <Link style={styles.card} to="/docs/onboarding/new-staff">
            <h3>👥 Onboarding</h3>
            <p>Step-by-step guides for new staff setup and access management.</p>
          </Link>

          <Link style={styles.card} to="/docs/security/access-control">
            <h3>🔐 Security</h3>
            <p>Access control, policies, incident response, and governance.</p>
          </Link>

        </section>

      </main>
    </Layout>
  );
}

/* INLINE STYLES */
const styles = {
  container: {
    padding: '3rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },

  hero: {
    marginBottom: '3rem',
  },

  title: {
    fontSize: '3rem',
    fontWeight: '700',
  },

  subtitle: {
    fontSize: '1.2rem',
    maxWidth: '750px',
    margin: '1rem auto',
    opacity: 0.85,
    lineHeight: 1.6,
  },

  buttonGroup: {
    marginTop: '2rem',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: '1.5rem',
    marginTop: '3rem',
  },

  card: {
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #ddd',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.2s ease',
  },
};

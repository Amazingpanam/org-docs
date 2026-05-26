import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Internal Documentation Portal"
      description="Central knowledge base for DevOps, Security, and Onboarding"
    >
      <main style={{ padding: '4rem', textAlign: 'center' }}>
        <h1>Internal Documentation Portal</h1>

        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '1rem auto' }}>
          A centralized knowledge base for onboarding, DevOps processes, and security practices.
          Built to improve consistency, collaboration, and operational efficiency across teams.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </main>
    </Layout>
  );
}

import React from 'react';
import Link from 'next/link';

export default function ReviewPage(){
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Review page</h1>
      <div style={styles.buttonContainer}>
        <Link href="/review/add-review">
          <button style={styles.button}>Add your review</button>
        </Link>
        <Link href="/review/all-review">
          <button style={styles.button}>See all reviews</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center' as 'center',
  },
  title: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};
import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <h1>
      Hello World
    </h1>
    // <div style={styles.container}>
    //   <h1 style={styles.title}>Home Page</h1>
    //   <Link href="/review">
    //     <button style={styles.button}>Go to Review Page</button>
    //   </Link>
    // </div>
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
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Home;

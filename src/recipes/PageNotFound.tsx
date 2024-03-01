export default function PageNotFound() {
  const styles = {
    container: {
      textAlign: 'center' as const,
      marginTop: '50px',
    },
    header: {
      fontSize: '48px',
      fontWeight: 'bold',
    },
    text: {
      fontSize: '24px',
      margin: '20px 0',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404 Page Not Found</h1>
      <p style={styles.text}>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
    </div>
  );
}
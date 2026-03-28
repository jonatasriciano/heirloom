export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="text-center">
        <div
          className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 mb-4"
          style={{ borderColor: 'var(--accent-primary)' }}
        />
        <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-lg)' }}>Loading...</p>
      </div>
    </div>
  );
}

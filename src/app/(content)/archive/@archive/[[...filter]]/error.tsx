'use client';

export default function FilterError({error}: {error: Error}) {
  return (
    <div id="error">
      <h2>An error occured!</h2>
      <p>{error.message}</p>
    </div>
  );
}
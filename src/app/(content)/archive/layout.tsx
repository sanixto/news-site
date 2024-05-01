interface ArchiveLayoutProps {
  archive: React.ReactNode,
  latest: React.ReactNode,
}

export default function ArchiveLayout({ archive, latest }: ArchiveLayoutProps) {
  return (
    <div>
      <h1>News Archieve</h1>
      <section id="archive-filter">
        {archive}
      </section>
      <section id="archive-latest">
        {latest}
      </section>
    </div>
  )
}

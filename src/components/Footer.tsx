export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8">
      <div className="section-container text-center">
        <p className="text-surface-500 text-sm">
          &copy; {new Date().getFullYear()} Carlos Quintero. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

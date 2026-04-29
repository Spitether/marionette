export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; 2024 Marionette. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4 text-sm">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}


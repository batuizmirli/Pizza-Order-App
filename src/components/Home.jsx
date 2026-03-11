export default function Home() {
  return (
    <header className="hero" aria-label="Pizza kampanya alanı">
      <p className="hero-brand">fırsatı kaçırma</p>
      <h1>Sıcak ve taze pizza keyfi</h1>
      <p className="hero-subtitle">Kendi pizzanı oluştur, saniyeler içinde siparişini gönder.</p>
      <a href="#order-form" className="hero-cta" data-cy="hero-order-btn" aria-label="Sipariş formuna git">
        Acıktım
      </a>
    </header>
  );
}

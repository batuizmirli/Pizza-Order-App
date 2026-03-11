export default function OrderConfirmation({ orderResponse, onCreateNewOrder, onGoHome, onGoForm }) {
  const orderPayload = orderResponse.orderPayload ?? {};
  const pricing = orderResponse.pricing ?? {};

  return (
    <main id="order-confirmation" className="confirmation" data-cy="order-confirmation">
      <header className="page-topbar">
        <h1>Teknolojik Yemekler</h1>
        <nav className="breadcrumb breadcrumb-top" aria-label="Sayfa yolu">
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              onGoHome();
            }}
          >
            Anasayfa
          </a>
          <span>-</span>
          <a
            href="#order-form"
            onClick={(event) => {
              event.preventDefault();
              onGoForm();
            }}
          >
            Sipariş Formu
          </a>
          <span>-</span>
          <a href="#order-confirmation" aria-current="page">Sipariş Onayı</a>
        </nav>
      </header>

      <h2 className="page-content-wrap" data-cy="order-confirmation-title">Sipariş Alındı 🎉</h2>
      <p>Siparişin başarıyla kaydedildi.</p>
      <div className="confirmation-card page-content-wrap">
        <p><strong>Sipariş ID:</strong> {orderResponse.id ?? 'N/A'}</p>
        <p><strong>Oluşturulma:</strong> {orderResponse.createdAt ?? 'N/A'}</p>
        <p><strong>Müşteri:</strong> {orderPayload.isim ?? 'N/A'}</p>
        <p><strong>Boyut:</strong> {orderPayload.boyut ?? 'N/A'}</p>
        <p><strong>Malzeme Adedi:</strong> {orderPayload.malzemeler?.length ?? 0}</p>
        <p><strong>Toplam:</strong> ₺{pricing.totalPrice ?? 0}</p>
      </div>
      <div className="confirmation-raw page-content-wrap">
        <h3>Axios Yanıtı</h3>
        <pre data-cy="response-json">{JSON.stringify(orderResponse, null, 2)}</pre>
      </div>
      <button type="button" onClick={onCreateNewOrder}>
        Yeni Sipariş Oluştur
      </button>
    </main>
  );
}

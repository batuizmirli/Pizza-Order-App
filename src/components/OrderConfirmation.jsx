export default function OrderConfirmation({ orderResponse, onCreateNewOrder }) {
  return (
    <main className="confirmation" data-cy="order-confirmation">
      <h2 data-cy="order-confirmation-title">Sipariş Alındı 🎉</h2>
      <p>Siparişin başarıyla kaydedildi.</p>
      <div className="confirmation-card">
        <p><strong>Sipariş ID:</strong> {orderResponse.id ?? 'N/A'}</p>
        <p><strong>Oluşturulma:</strong> {orderResponse.createdAt ?? 'N/A'}</p>
      </div>
      <button type="button" onClick={onCreateNewOrder}>
        Yeni Sipariş Oluştur
      </button>
    </main>
  );
}

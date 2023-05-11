export function formatCentsToEuro(cents) {
  console.log(cents)
  const euros = cents / 100
  const formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  return formatter.format(euros)
}

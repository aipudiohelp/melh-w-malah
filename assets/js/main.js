// ==========================================
// إعدادات المتجر والتواصل
// ==========================================

// قم بتغيير هذا الرقم لرقم واتساب المطعم الفعلي (مع كود الدولة وبدون علامة +)
const WHATSAPP_PHONE = "201005825888";

/**
 * دالة طلب وجبة محددة من المنيو
 * @param {string} itemName - اسم الطبق
 * @param {number} price - سعر الوجبة بالجنيه
 */
function orderItem(itemName, price) {
  const message = `مرحباً "ملح وملاح" 👋\nأود طلب:\n🍽️ الصنف: *${itemName}*\n💰 السعر: *${price} جنيه*\n\nيرجى تأكيد الطلب وتحديد وقت التوصيل.`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
}

/**
 * دالة الاستفسار والطلب من بنرات العروض (العزومات، الباقات العائلية، والتوصيل المجاني)
 * @param {string} promoTitle - اسم العرض
 */
function orderPromo(promoTitle) {
  const message = `مرحباً "ملح وملاح" 👋\nأود الاستفسار بخصوص: *${promoTitle}* والتفاصيل المتاحة لديكم.`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
}

/**
 * دالة الطلب العام المباشر من الأزرار الرئيسية
 */
function sendGeneralOrder() {
  const message = `مرحباً "ملح وملاح" 👋\nأود الاستفسار والطلب من قائمة الأطعمة المتوفرة اليوم.`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`, '_blank');
}

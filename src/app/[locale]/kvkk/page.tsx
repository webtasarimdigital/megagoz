import { useTranslations } from "next-intl";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KVKKPage() {
  const t = useTranslations("Navigation");

  return (
    <main>
      <Header />
      
      {/* Hero Header Area */}
      <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center pt-24 md:pt-32">
        <Image 
          src="/images/slide2.png" 
          alt="KVKK Background" 
          fill 
          priority
          className="object-cover object-center" 
        />
        <div className="absolute inset-0 bg-[#0a111a]/85 z-0" />
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl pb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
            <span className="text-[#ecbb3f] font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
              KURUMSAL
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-[#ecbb3f]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 md:mb-6">
            Kişisel Verilerin Korunması
          </h1>
          
          <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-2xl px-4">
            Aydınlatma Metni
          </p>
        </div>
      </div>

      <div className="bg-[#F8FAFC] pb-24 pt-16">
      
      <div className="container mx-auto px-6 max-w-[1000px] relative z-10">

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.05)] text-gray-700 leading-relaxed space-y-8 font-medium">
          
          <div className="prose prose-lg prose-headings:text-[#162f5d] prose-headings:font-bold prose-p:text-gray-600 prose-a:text-[#ecbb3f] max-w-none">
            <p className="lead font-semibold text-[#162f5d] text-lg mb-8">
              MEGAGÖZ olarak, kişisel verilerinizin güvenliği ve gizliliği konusuna büyük önem vermekteyiz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, veri sorumlusu sıfatıyla kişisel verilerinizin işlenmesi, saklanması ve korunmasına ilişkin sizleri bilgilendirmek isteriz.
            </p>

            <h3 className="text-xl font-bold text-[#162f5d] border-b border-gray-100 pb-2 mb-4">1. Veri Sorumlusu</h3>
            <p>Bu aydınlatma metni kapsamında veri sorumlusu:</p>
            <ul className="list-none pl-0 space-y-2 bg-gray-50 p-6 rounded-2xl mb-8 border border-gray-100">
               <li><strong className="text-[#162f5d]">Kurum:</strong> MEGAGÖZ</li>
               <li><strong className="text-[#162f5d]">Adres:</strong> İstiklal Mahallesi, Gamsız Sokak No:3, 34762 Ümraniye / İstanbul</li>
               <li><strong className="text-[#162f5d]">Telefon:</strong> 444 0 320</li>
               <li><strong className="text-[#162f5d]">E-posta:</strong> info@megagoz.com</li>
            </ul>

            <h3 className="text-xl font-bold text-[#162f5d] border-b border-gray-100 pb-2 mb-4">2. Kişisel Verilerin İşlenme Amaçları</h3>
            <p>Toplanan kişisel verileriniz, KVKK’nın 5. ve 6. maddeleri uyarınca aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
               <li>Sağlık hizmeti sunumunun planlanması ve yürütülmesi,</li>
               <li>Randevu oluşturma, bilgilendirme ve hasta kayıt işlemlerinin gerçekleştirilmesi,</li>
               <li>Teşhis, tedavi ve bakım hizmetlerinin sunulması,</li>
               <li>Sağlık hizmetlerine ilişkin faturalandırma, muhasebe ve finans süreçlerinin yürütülmesi,</li>
               <li>Yasal yükümlülüklerimizin yerine getirilmesi,</li>
               <li>Hasta memnuniyetinin ölçülmesi ve hizmet kalitesinin artırılması,</li>
               <li>Kurumsal iletişim faaliyetlerinin yürütülmesi.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#162f5d] border-b border-gray-100 pb-2 mb-4">3. Kişisel Verilerin Aktarılması</h3>
            <p>Kişisel verileriniz, yukarıda belirtilen amaçlarla sınırlı olmak üzere, kanunlarda öngörülen şartlar çerçevesinde aşağıdaki kurum ve kuruluşlarla paylaşılabilmektedir:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
               <li>Sağlık Bakanlığı, Sosyal Güvenlik Kurumu (SGK) ve diğer kamu kurum/kuruluşları,</li>
               <li>Yetkili denetim mercileri,</li>
               <li>Hukuki yükümlülüklerin yerine getirilmesi amacıyla adli merciler,</li>
               <li>Sözleşmesel ilişkiler kapsamında hizmet aldığımız veya iş birliği yaptığımız üçüncü taraf firmalar.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#162f5d] border-b border-gray-100 pb-2 mb-4">4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h3>
            <p>Kişisel verileriniz;</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
               <li>Web sitemiz, çağrı merkezimiz, e-posta veya sosyal medya hesaplarımız,</li>
               <li>Fiziksel formlar, muayene kayıtları, kamera sistemleri ve sözlü beyanlar</li>
            </ul>
            <p className="mb-8">
               aracılığıyla toplanmakta olup, KVKK’nın 5. ve 6. maddelerinde belirtilen; "kanunlarda açıkça öngörülmesi", "bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması" ve "veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi" hukuki sebeplerine dayanılarak işlenmektedir.
            </p>

            <h3 className="text-xl font-bold text-[#162f5d] border-b border-gray-100 pb-2 mb-4">5. İlgili Kişinin Hakları</h3>
            <p>KVKK’nın 11. maddesi uyarınca, kişisel verileri işlenen kişiler olarak aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
               <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
               <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
               <li>İşleme amacını ve bu amaca uygun kullanılıp kullanılmadığını öğrenme,</li>
               <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
               <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
               <li>KVKK’da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
               <li>Düzeltme, silme veya yok edilme işlemlerinin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
               <li>İşlenen verilerin münhasıran otomatik sistemler aracılığıyla analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
               <li>Kişisel verilerin kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#162f5d] border-b border-gray-100 pb-2 mb-4">6. Başvuru Yöntemi</h3>
            <p>Haklarınıza ilişkin taleplerinizi yazılı olarak veya kayıtlı elektronik posta (KEP) adresi üzerinden aşağıdaki iletişim kanallarıyla bize iletebilirsiniz:</p>
            
            <div className="bg-gray-50 p-6 rounded-2xl mb-6 mt-4 border border-gray-100">
               <ul className="list-none pl-0 space-y-2 mb-0">
                 <li><strong className="text-[#162f5d]">Adres:</strong> İstiklal Mahallesi, Gamsız Sokak No:3, 34762 Ümraniye / İstanbul</li>
                 <li><strong className="text-[#162f5d]">E-posta:</strong> info@megagoz.com</li>
                 <li><strong className="text-[#162f5d]">Telefon:</strong> 444 0 320</li>
               </ul>
            </div>
            
            <p className="mb-8">Başvurularınız, KVKK’nın 13. maddesi uyarınca en kısa sürede ve en geç 30 gün içinde sonuçlandırılacaktır.</p>

            <div className="pt-6 mt-12 border-t border-gray-200 text-center text-sm text-gray-500">
              <p className="font-bold text-[#162f5d] mb-1">© MEGAGÖZ – Tüm hakları saklıdır.</p>
              <p>Bu metin, KVKK’nın 10. maddesi kapsamında bilgilendirme amacıyla hazırlanmıştır.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
      <Footer />
    </main>
  );
}

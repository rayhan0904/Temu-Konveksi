// Data Konfigurasi
const phoneNumber = '628123456789';
const emailAddress = 'info@temukonveksi.com';
const instagramUrl = 'https://instagram.com/temukonveksi';
const defaultMessage = 'Halo, saya tertarik dengan produk Temu Konveksi. Mohon informasinya.';
const defaultSubject = 'Inquiry Layanan Konveksi';

// --- Data Produk ---
const products = [
    { id: 'jaket', name: 'Jaket', description: 'Jaket berkualitas untuk berbagai keperluan, tersedia dalam berbagai model dan warna.', image: 'https://images.unsplash.com/photo-1727516299214-c4d54704b045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjbG90aGluZyUyMGphY2tldHxlbnwxfHx8fDE3NTk1Njg1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Bahan premium', 'Tahan lama', 'Desain ergonomis', 'Berbagai ukuran'], category: 'Outerwear' },
    { id: 'kemeja', name: 'Kemeja', description: 'Kemeja formal dan casual untuk kebutuhan kantor dan sehari-hari.', image: 'https://images.unsplash.com/photo-1566827886031-7d0f288f76ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b3JrJTIwdW5pZm9ybSUyMHNoaXJ0fGVufDF8fHx8MTc1OTU2ODU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Bahan katun berkualitas', 'Nyaman dipakai', 'Mudah dirawat', 'Model modern'], category: 'Formal' },
    { id: 'almamater', name: 'Almamater', description: 'Seragam almamater untuk sekolah dan universitas dengan kualitas terbaik.', image: 'https://images.unsplash.com/photo-1566827886031-7d0f288f76ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzY2hvb2wlMjB1bmlmb3JtfGVufDF8fHx8MTc1OTQ5ODcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Sesuai standar sekolah', 'Warna tidak mudah luntur', 'Ukuran lengkap', 'Harga terjangkau'], category: 'Seragam' },
    { id: 'rompi', name: 'Rompi', description: 'Rompi untuk berbagai keperluan kerja dan formal.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b3JrJTIwdmVzdHxlbnwxfHx8fDE3NTk1Njg1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Design profesional', 'Bahan berkualitas', 'Berbagai warna', 'Custom logo'], category: 'Formal' },
    { id: 'poloshirt', name: 'Poloshirt', description: 'Poloshirt casual dan semi formal untuk berbagai acara.', image: 'https://images.unsplash.com/photo-1625910513413-c23b8bb81cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwb2xvJTIwc2hpcnR8ZW58MXx8fHwxNzU5NTY4NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Bahan lacoste', 'Adem dan nyaman', 'Model slim fit', 'Bordir logo tersedia'], category: 'Casual' },
    { id: 'kaos', name: 'Kaos', description: 'Kaos oblong berkualitas untuk merchandise dan seragam.', image: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0LXnoahirtfGVufDF8fHx8MTc1OTU2ODU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Bahan cotton combed', 'Sablon berkualitas', 'Warna tidak pudar', 'Harga ekonomis'], category: 'Casual' },
    { id: 'hoodie', name: 'Hoodie Crewneck', description: 'Hoodie dan crewneck untuk gaya casual dan hangat.', image: 'https://images.unsplash.com/photo-1621027212857-640155d6943c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxob29kaWUlMjBzd2VhdHNoaXJ0fGVufDF8fHx8MTc1OTU2ODU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Bahan fleece tebal', 'Design trendy', 'Kantong depan', 'Sangat hangat'], category: 'Outerwear' },
    { id: 'rompi-safety', name: 'Rompi Safety', description: 'Rompi keselamatan kerja dengan standar K3.', image: 'https://images.unsplash.com/photo-1662309376159-b95fb193d96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzYWZldHklMjB2ZXN0fGVufDF8fHx8MTc1OTU2ODU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Scotlite reflektif', 'Standar SNI', 'High visibility', 'Tahan lama'], category: 'Safety' },
    { id: 'kemeja-safety', name: 'Kemeja Safety', description: 'Kemeja safety untuk pekerja dengan perlindungan maksimal.', image: 'https://images.unsplash.com/photo-1566827886031-7d0f288f76ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b3JrJTIwdW5pZm9ybSUyMHNoaXJ0fGVufDF8fHx8MTc1OTU2ODU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Bahan drill', 'Standar K3', 'Saku fungsional', 'Warna standar safety'], category: 'Safety' },
    { id: 'kemeja-tactical', name: 'Kemeja Tactical', description: 'Kemeja tactical untuk keperluan outdoor dan keamanan.', image: 'https://images.unsplash.com/photo-1633365087123-b3f2c305769a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0YWN0aWNhbCUyMHnoahirtfGVufDF8fHx8MTc1OTU2ODU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Bahan ripstop', 'Multi pocket', 'Tahan robek', 'Design militer'], category: 'Tactical' },
    { id: 'pdh', name: 'PDH', description: 'Pakaian Dinas Harian untuk instansi pemerintah.', image: 'https://images.unsplash.com/photo-1566827886031-7d0f288f76ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b3JrJTIwdW5pZm9ybSUyMHnoahirtfGVufDF8fHx8MTc1OTU2ODU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Sesuai standar dinas', 'Bahan formal', 'Jahitan rapi', 'Logo instansi'], category: 'Formal' },
    { id: 'pdl', name: 'PDL', description: 'Pakaian Dinas Lapangan untuk kegiatan outdoor.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b3JrJTIwdmVzdHxlbnwxfHx8fDE3NTk1Njg1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Bahan kuat', 'Tahan outdoor', 'Saku banyak', 'Warna lapangan'], category: 'Outdoor' },
    { id: 'bordir-emblem', name: 'Bordir Emblem', description: 'Jasa bordir emblem dan logo untuk berbagai produk.', image: 'https://images.unsplash.com/photo-1671696564980-02ac81b3f629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlbWJyb2lkZXJ5JTIwZW1ibGVtfGVufDF8fHx8MTc1OTU2ODU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Mesin bordir canggih', 'Detail presisi', 'Warna tahan lama', 'Custom design'], category: 'Service' },
    { id: 'sablon', name: 'Sablon', description: 'Jasa sablon berkualitas untuk kaos dan merchandise.', image: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0LXnoahirtfGVufDF8fHx8MTc1OTU2ODU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Sablon plastisol', 'Warna cerah', 'Tidak crack', 'Full color printing'], category: 'Service' },
    { id: 'cmt', name: 'CMT', description: 'Cut Make Trim - jasa produksi pakaian sesuai pesanan.', image: 'https://images.unsplash.com/photo-1673201229733-69d19c5c4a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxnYXJtZW50JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NTk1Njg1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Custom design', 'Minimum order rendah', 'Kualitas eksport', 'Proses cepat'], category: 'Service' },
    { id: 'totebag', name: 'Totebag', description: 'Totebag custom untuk merchandise dan goodie bag.', image: 'https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0b3RlJTIwYmFnfGVufDF8fHx8MTc1OTU2ODU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Bahan canvas', 'Sablon berkualitas', 'Handle kuat', 'Ramah lingkungan'], category: 'Merchandise' },
    { id: 'goodiebag', name: 'Goodiebag', description: 'Goodie bag untuk event dan souvenir.', image: 'https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0b3RlJTIwYmFnfGVufDF8fHx8MTc1OTU2ODU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Berbagai ukuran', 'Custom printing', 'Harga ekonomis', 'Delivery cepat'], category: 'Merchandise' },
    { id: 'topi', name: 'Topi', description: 'Topi untuk seragam dan merchandise.', image: 'https://images.unsplash.com/photo-1681583663936-7e213cca9d72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjYXAlMjBoYXR8ZW58MXx8fHwxNzU5NTY4NTU1fDA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Berbagai model', 'Bordir logo', 'Bahan berkualitas', 'Adjustable size'], category: 'Merchandise' },
    { id: 'celana', name: 'Celana', description: 'Celana kerja dan seragam untuk berbagai profesi.', image: 'https://images.unsplash.com/photo-1604182440345-4a82e1c3876b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b3JrJTIwcGFudHN8ZW58MXx8fHwxNzU5NTY4NTU1fDA&lib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', features: ['Bahan drill berkualitas', 'Jahitan kuat', 'Model slim/regular', 'Berbagai warna'], category: 'Formal' }
];

const categories = ['Semua', 'Formal', 'Casual', 'Safety', 'Tactical', 'Outdoor', 'Service', 'Merchandise', 'Outerwear', 'Seragam'];
let selectedCategory = 'Semua';
let selectedProduct = null;

const galleryImages = [
    { id: '1', src: 'https://images.unsplash.com/photo-1706381068085-29fe6c2afe51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMHdlYXJpbmclMjB1bmlmb3JtfGVufDF8fHx8MTc1OTU2ODU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Seragam Perusahaan', description: 'Tim karyawan PT. Mandiri dengan seragam berkualitas tinggi' },
    { id: '2', src: 'https://images.unsplash.com/photo-1759408174047-41e91a194daa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjbG90aGluZyUyMGZhY3RvcnklMjB3b3JrZXJzfGVufDF8fHx8MTc1OTU2ODU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Proses Produksi', description: 'Tim produksi kami bekerja dengan standar kualitas tinggi' },
    { id: '3', src: 'https://images.unsplash.com/photo-1673201229733-69d19c5c4a87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxnYXJtZW50JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NTk1Njg1NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Fasilitas Modern', description: 'Fasilitas produksi dengan teknologi terkini' },
    { id: '4', src: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0LXNoaXJ0fGVufDF8fHx8MTc1OTU2ODU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Produk Merchandise', description: 'Kaos custom untuk event perusahaan' },
    { id: '5', src: 'https://images.unsplash.com/photo-1566827886031-7d0f288f76ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3b3JrJTIwdW5pZm9ybSUyMHNoaXJ0fGVufDF8fHx8MTc1OTU2ODU1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Seragam Kerja', description: 'Kemeja kerja berkualitas untuk karyawan kantor' },
    { id: '6', src: 'https://images.unsplash.com/photo-1662309376159-b95fb193d96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzYWZldHklMjB2ZXN0fGVufDF8fHx8MTc1OTU2ODU1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Safety Equipment', description: 'Rompi safety untuk pekerja konstruksi' },
    { id: '7', src: 'https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0b3RlJTIwYmFnfGVufDF8fHx8MTc1OTU2ODU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Merchandise Event', description: 'Totebag custom untuk event dan seminar' },
    { id: '8', src: 'https://images.unsplash.com/photo-1625910513413-c23b8bb81cba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxwb2xvJTIwc2hpcnR8ZW58MXx8fHwxNzU5NTY4NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', title: 'Polo Shirt Tim', description: 'Polo shirt untuk tim olahraga perusahaan' }
];

let currentSlide = 0;
let slideInterval;
const intervalTime = 4000;

// --- DOM Elements ---
const toggleButton = document.getElementById('mobile-menu-toggle');
const dropdown = document.getElementById('mobile-menu-dropdown');
const nav = document.getElementById('main-nav');
const overlay = document.getElementById('mobile-overlay');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.body;
const productGrid = document.getElementById('product-grid');
const categoryFilterContainer = document.getElementById('category-filter');
const modalBackdrop = document.getElementById('product-modal-backdrop');
const modalContent = document.getElementById('product-modal-content');
const productButton = document.getElementById('navigateToProductButton');
const whatsappCard = document.getElementById('whatsapp-card');
const whatsappButton = document.getElementById('whatsapp-button');
const emailCard = document.getElementById('email-card');
const emailButton = document.getElementById('email-button');
const instagramCard = document.getElementById('instagram-card');
const whatsappFloatButton = document.getElementById('whatsappFloatButton');
const sections = ['dashboard', 'tentang', 'product', 'profile', 'kontak'];

let isMenuOpen = false;
let currentSection = 'dashboard';

// Kelas Navigasi
const ACTIVE_DESKTOP_CLASSES = ['bg-gray-700', 'text-cyan-400', 'shadow-none'];
const DEFAULT_DESKTOP_CLASSES = ['text-gray-300', 'hover:bg-gray-700', 'hover:text-cyan-400']; 
const ACTIVE_MOBILE_CLASSES = ['bg-gray-700', 'text-cyan-400', 'shadow-none'];
const DEFAULT_MOBILE_CLASSES = ['text-gray-300', 'hover:bg-gray-700', 'hover:text-cyan-400'];
// --- Fungsi Navigasi ---
const updateNavStyles = (sectionId) => {
    navLinks.forEach(link => {
        const linkSectionId = link.getAttribute('data-section-id');
        const isActive = linkSectionId === sectionId;
        const isMobile = link.classList.contains('mobile-link');
        
        const activeClasses = isMobile ? ACTIVE_MOBILE_CLASSES : ACTIVE_DESKTOP_CLASSES;
        const defaultClasses = isMobile ? DEFAULT_MOBILE_CLASSES : DEFAULT_DESKTOP_CLASSES;

        if (isActive) {
            link.classList.add(...activeClasses);
            link.classList.remove(...defaultClasses);
        } else {
            link.classList.remove(...activeClasses);
            link.classList.add(...defaultClasses);
        }
    });
};

const toggleMenu = (open) => {
    isMenuOpen = open;
    toggleButton.setAttribute('aria-expanded', isMenuOpen);

    const topLine = toggleButton.querySelector('.top-line');
    const middleLine = toggleButton.querySelector('.middle-line');
    const bottomLine = toggleButton.querySelector('.bottom-line');

    if (isMenuOpen) {
        topLine.classList.replace('-translate-y-2', 'rotate-45');
        middleLine.classList.add('opacity-0');
        bottomLine.classList.replace('translate-y-1', '-rotate-45');
        dropdown.classList.replace('max-h-0', 'max-h-96');
        dropdown.classList.replace('opacity-0', 'opacity-100');
        overlay.classList.remove('hidden');
        body.style.overflow = 'hidden';
    } else {
        topLine.classList.replace('rotate-45', '-translate-y-2');
        middleLine.classList.remove('opacity-0');
        bottomLine.classList.replace('-rotate-45', 'translate-y-1');
        dropdown.classList.replace('max-h-96', 'max-h-0');
        dropdown.classList.replace('opacity-100', 'opacity-0');
        overlay.classList.add('hidden');
        body.style.overflow = 'unset';
    }
};

const handleNavClick = (sectionId) => {
    currentSection = sectionId;
    updateNavStyles(sectionId);
    
    if (isMenuOpen) {
        toggleMenu(false);
    }

    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.getElementById('main-nav').offsetHeight;
        const bodyRect = document.body.getBoundingClientRect().top;
        const sectionRect = section.getBoundingClientRect().top;
        const offset = sectionRect - bodyRect - navHeight;

        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
};

// --- Fungsi Kontak ---
const handleWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
};

const handleEmail = () => {
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(defaultSubject)}`;
    window.open(mailtoUrl, '_blank');
};

const handleInstagram = () => {
    window.open(instagramUrl, '_blank');
};

// --- Fungsi Produk ---
window.closeModal = function() {
    selectedProduct = null;
    modalBackdrop.classList.remove('dialog-open');
    document.body.style.overflow = '';
}

window.openModal = function(productId) {
    selectedProduct = products.find(p => p.id === productId);

    if (selectedProduct) {
        const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

        const featuresHtml = selectedProduct.features.map(feature => `
            <li class="flex items-center text-gray-700">
                <span class="w-2 h-2 bg-primary rounded-full mr-3"></span>
                ${feature}
            </li>
        `).join('');

        const whatsappMessage = `Halo, saya tertarik dengan produk ${selectedProduct.name}. Mohon informasi lebih lanjut.`;
        const whatsappUrl = `https://wa.me/628123456789?text=${encodeURIComponent(whatsappMessage)}`;

        modalContent.innerHTML = `
            <div class="flex flex-col space-y-1.5 p-6 border-b border-gray-100">
                <h2 class="text-2xl font-semibold leading-none tracking-tight">${selectedProduct.name}</h2>
                <p class="text-sm text-gray-600">Detail produk ${selectedProduct.name} dari kategori ${selectedProduct.category}</p>
                <button
                    onclick="closeModal()"
                    class="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full"
                >
                    ${closeIcon}
                </button>
            </div>
            
            <div class="space-y-6 p-6">
                <div class="aspect-video overflow-hidden rounded-lg">
                    <img
                        src="${selectedProduct.image}"
                        alt="${selectedProduct.name}"
                        onerror="this.onerror=null;this.src='https://via.placeholder.com/1080x720?text=Gambar+Tidak+Tersedia';"
                        class="w-full h-full object-cover"
                    />
                </div>
                
                <div class="space-y-4">
                    <div>
                        <span class="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                            ${selectedProduct.category}
                        </span>
                    </div>
                    
                    <p class="text-gray-700 leading-relaxed">${selectedProduct.description}</p>
                    
                    <div>
                        <h4 class="font-semibold text-gray-900 mb-3">Keunggulan Produk:</h4>
                        <ul class="space-y-2">
                            ${featuresHtml}
                        </ul>
                    </div>
                    
                    <div class="flex gap-4 pt-4">
                        <a
                            href="${whatsappUrl}"
                            target="_blank"
                            class="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 bg-primary text-white hover:bg-primary/90"
                        >
                            Hubungi via WhatsApp
                        </a>
                        <button
                            onclick="closeModal()"
                            class="flex-1 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 border border-input bg-white shadow-sm hover:bg-gray-100"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        `;

        modalBackdrop.classList.add('dialog-open');
        document.body.style.overflow = 'hidden';
    }
}

function renderProducts() {
    const filteredProducts = selectedCategory === 'Semua'
        ? products
        : products.filter(product => product.category === selectedCategory);

    productGrid.innerHTML = filteredProducts.map(product => `
        <div
            class="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            onclick="openModal('${product.id}')"
        >
            <div class="aspect-square overflow-hidden rounded-t-xl">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.onerror=null;this.src='https://via.placeholder.com/600x600?text=Gambar+Tidak+Tersedia';"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm line-clamp-2">${product.description}</p>
                <div class="mt-4">
                    <span class="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        ${product.category}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

window.setCategory = function(category) {
    selectedCategory = category;
    renderCategories();
    renderProducts();
}

function renderCategories() {
    categoryFilterContainer.innerHTML = categories.map(category => `
        <button
            onclick="setCategory('${category}')"
            class="px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }"
        >
            ${category}
        </button>
    `).join('');
}

// --- Fungsi Carousel ---
function updateCarousel() {
    const slides = document.querySelectorAll('#main-carousel .carousel-slide');
    const dots = document.querySelectorAll('#carousel-dots button');
    const thumbnails = document.querySelectorAll('#thumbnail-grid button');

    slides.forEach((slide, index) => {
        let translateX = 'translate-x-full';
        if (index === currentSlide) {
            translateX = 'translate-x-0';
        } else if (index < currentSlide) {
            translateX = '-translate-x-full';
        }
        slide.className = `carousel-slide absolute inset-0 transform ${translateX}`;
    });

    dots.forEach((dot, index) => {
        dot.className = `w-3 h-3 rounded-full transition-all ${
            index === currentSlide ? 'bg-white' : 'bg-white/50'
        }`;
    });

    thumbnails.forEach((thumb, index) => {
        thumb.classList.remove('ring-4', 'ring-primary', 'scale-105', 'hover:scale-105');
        if (index === currentSlide) {
            thumb.classList.add('ring-4', 'ring-primary', 'scale-105');
        } else {
            thumb.classList.add('hover:scale-105');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % galleryImages.length;
    updateCarousel();
    resetAutoSlide();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + galleryImages.length) % galleryImages.length;
    updateCarousel();
    resetAutoSlide();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
    resetAutoSlide();
}

function initializeCarouselElements() {
    const dotsContainer = document.getElementById('carousel-dots');
    const thumbnailGrid = document.getElementById('thumbnail-grid');
    dotsContainer.innerHTML = '';
    thumbnailGrid.innerHTML = '';
    
    galleryImages.forEach((image, index) => {
        // Create Dot
        const dot = document.createElement('button');
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);

        // Create Thumbnail
        const thumbnailButton = document.createElement('button');
        thumbnailButton.onclick = () => goToSlide(index);
        thumbnailButton.className = `aspect-square overflow-hidden rounded-lg transition-all ${
            index === 0 ? 'ring-4 ring-primary scale-105' : 'hover:scale-105'
        }`;

        const thumbnailImage = document.createElement('img');
        thumbnailImage.src = image.src;
        thumbnailImage.alt = image.title;
        thumbnailImage.className = 'w-full h-full object-cover';
        
        thumbnailButton.appendChild(thumbnailImage);
        thumbnailGrid.appendChild(thumbnailButton);
    });
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        nextSlide();
    }, intervalTime);
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// --- Initializer dan Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Tahun di footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // 2. Inisialisasi Navigasi
    const initialSection = sections.find(s => document.getElementById(s)) || 'dashboard';

    const hash = window.location.hash.substring(1);
    currentSection = sections.includes(hash) ? hash : initialSection;

    updateNavStyles(currentSection);

    // Menambahkan event listeners navigasi
    toggleButton.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu(!isMenuOpen);
    });
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const sectionId = link.getAttribute('data-section-id');
            handleNavClick(sectionId);
        });
    });
    document.addEventListener('mousedown', (event) => {
        if (isMenuOpen && !nav.contains(event.target)) {
            toggleMenu(false);
        }
    });
    overlay.addEventListener('click', () => {
        toggleMenu(false);
    });

    // 3. Inisialisasi Dashboard Button
    if (productButton) {
        productButton.addEventListener('click', () => handleNavClick('product'));
    }

    // 4. Inisialisasi Produk
    renderCategories();
    renderProducts();

    // 5. Inisialisasi Carousel Profile
    initializeCarouselElements();
    updateCarousel();
    startAutoSlide();
    
    document.getElementById('prev-slide').addEventListener('click', prevSlide);
    document.getElementById('next-slide').addEventListener('click', nextSlide);

    // 6. Inisialisasi Kontak
    if (whatsappCard) whatsappCard.addEventListener('click', handleWhatsApp);
    if (whatsappButton) whatsappButton.addEventListener('click', handleWhatsApp);
    if (emailCard) emailCard.addEventListener('click', handleEmail);
    if (emailButton) emailButton.addEventListener('click', handleEmail);
    if (instagramCard) instagramCard.addEventListener('click', handleInstagram);
    if (whatsappFloatButton) whatsappFloatButton.addEventListener('click', handleWhatsApp);

    // 7. Scroll ke bagian awal jika ada hash di URL
    if (currentSection !== 'dashboard' && document.getElementById(currentSection)) {
        const section = document.getElementById(currentSection);
        const navHeight = document.getElementById('main-nav').offsetHeight;
        window.scrollTo({
            top: section.offsetTop - navHeight,
            behavior: 'smooth'
        });
    }
});
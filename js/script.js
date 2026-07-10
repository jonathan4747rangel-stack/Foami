// script.js - ubicado en /js/

// ==================== CATÁLOGO DE COLORES CON HEX ====================
const catalogoPinturas = {
    blackcolor: [
        {id: "BF-804", hex: "#F3E5AB"}, {id: "BF-803", hex: "#FFF44F"},
        {id: "BF-801", hex: "#FFD300"}, {id: "BF-802", hex: "#FFB92D"},
        {id: "BF-806", hex: "#FF8000"}, {id: "BF-825", hex: "#F5F5DC"},
        {id: "BF-826", hex: "#CC7722"}, {id: "BF-824", hex: "#F3D2B3"},
        {id: "BF-820", hex: "#8DB600"}, {id: "BF-821", hex: "#00A86B"},
        {id: "BF-822", hex: "#006400"}, {id: "BF-823", hex: "#004B49"},
        {id: "BF-809", hex: "#B22222"}, {id: "BF-811", hex: "#960018"},
        {id: "BF-827", hex: "#674834"}, {id: "BF-832", hex: "#FFFFFF"},
        {id: "BF-819", hex: "#7FFFD4"}, {id: "BF-816", hex: "#87CEEB"},
        {id: "BF-817", hex: "#002366"}, {id: "BF-818", hex: "#000080"},
        {id: "BF-810", hex: "#D53032"}, {id: "BF-812", hex: "#FF00FF"},
        {id: "BF-828", hex: "#B24A2C"}, {id: "BF-830", hex: "#808080"},
        {id: "BF-805", hex: "#FF8C69"}, {id: "BF-807", hex: "#FFC0CB"},
        {id: "BF-808", hex: "#FFE4E1"}, {id: "BF-814", hex: "#D8BFD8"},
        {id: "BF-815", hex: "#8B00FF"}, {id: "BF-813", hex: "#610B0B"},
        {id: "BF-829", hex: "#452721"}, {id: "BF-831", hex: "#000000"}
    ],
    la_nieve: [
        {id: "LN-01", hex: "#F8F9FA"}, {id: "LN-02", hex: "#FFD300"},
        {id: "LN-03", hex: "#FFFF00"}, {id: "LN-04", hex: "#F3D2B3"},
        {id: "LN-05", hex: "#FF4500"}, {id: "LN-06", hex: "#B22222"},
        {id: "LN-07", hex: "#C41E3A"}, {id: "LN-08", hex: "#610B0B"},
        {id: "LN-09", hex: "#FFB7C5"}, {id: "LN-10", hex: "#FF00FF"},
        {id: "LN-11", hex: "#DA70D6"}, {id: "LN-12", hex: "#9932CC"},
        {id: "LN-13", hex: "#007FFF"}, {id: "LN-14", hex: "#0077BE"},
        {id: "LN-15", hex: "#0047AB"}, {id: "LN-16", hex: "#00008B"},
        {id: "LN-17", hex: "#00A86B"}, {id: "LN-18", hex: "#355E3B"},
        {id: "LN-19", hex: "#006400"}, {id: "LN-20", hex: "#5C4033"},
        {id: "LN-21", hex: "#1C1C1C"}, {id: "LN-22", hex: "#808080"}
    ]
};

// Nombres de BLACKCOLOR en el orden correcto
const blackcolorNombres = [
    "Vainilla", "Amarillo Claro", "Amarillo Sol", "Amarillo Araguaney",
    "Naranja", "Beige", "Ocre", "Piel",
    "Verde Manzana", "Verde Perico", "Verde Navidad", "Verde Intenso",
    "Rojo Navidad", "Carmín", "Marrón Avellana", "Blanco",
    "Aguamarina", "Azul Cielo", "Azul Rey", "Azul Intenso",
    "Rojo Fresa", "Fucsia", "Terracota", "Gris",
    "Salmón", "Rosado", "Rosado Claro", "Lila",
    "Violeta", "Vino Tinto", "Marrón Caoba", "Negro"
];

// Nombres de LA NIEVE en el orden correcto
const laNieveNombres = [
    "Blanco Sierra Nevada", "Amarillo Turpial", "Amarillo Narciso", "Carne",
    "Naranja Atardecer", "Rojo Navidad", "Rojo Cardenal", "Vinotinto",
    "Rosado Apamate", "Fucsia Trinitaria", "Orquídea", "Violeta Buganvilla",
    "Azul Los Roques", "Azul Mar Caribe", "Azul Mochima", "Azul Choroní",
    "Verde Canaima", "Verde Amazona", "Verde Navidad", "Marrón Gran Sabana",
    "Negro Petróleo", "Gris"
];

// Construir lista de productos con su color hex
const products = [];

// BLACKCOLOR
for (let i = 0; i < catalogoPinturas.blackcolor.length; i++) {
    const colorData = catalogoPinturas.blackcolor[i];
    const nombre = blackcolorNombres[i];
    products.push({
        id: `black_${colorData.id.replace(/-/g, "_")}`,
        nombre: `${nombre} (${colorData.id})`,
        categoria: "BLACKCOLOR",
        presentacion: "Envase 60ml",
        contenido: 1,
        stock: 999,
        tipoUnidad: "unidad",
        step: 3,
        minimo: 3,
        hex: colorData.hex
    });
}

// LA NIEVE
for (let i = 0; i < catalogoPinturas.la_nieve.length; i++) {
    const colorData = catalogoPinturas.la_nieve[i];
    const nombre = laNieveNombres[i];
    products.push({
        id: `lanieve_${colorData.id.toLowerCase()}`,
        nombre: nombre,
        categoria: "LA NIEVE",
        presentacion: "Envase 60ml",
        contenido: 1,
        stock: 999,
        tipoUnidad: "unidad",
        step: 3,
        minimo: 3,
        hex: colorData.hex
    });
}

// ==================== LÓGICA DEL CARRITO ====================
let cart = [];
let currentCategory = null;

function escapeHtml(str) {
    return str.replace(/[&<>]/g, m => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;" }[m]));
}

function showToast(msg) {
    let toast = document.createElement("div");
    toast.className = "fixed bottom-10 left-1/2 -translate-x-1/2 bg-black/90 border border-neon-primary text-neon-primary text-[11px] font-bold tracking-widest uppercase px-6 py-3 rounded-full z-[100] shadow-2xl toast-animate";
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

function saveCart() {
    localStorage.setItem("guicar_cart_pinturas", JSON.stringify(cart));
}

function loadCart() {
    let s = localStorage.getItem("guicar_cart_pinturas");
    cart = s ? JSON.parse(s) : [];
    updateCartUI();
}

function formatCantidadConPaquetes(envases) {
    if (envases === 0) return "0 und";
    let paquetes12 = Math.floor(envases / 12);
    let resto = envases % 12;
    let partes = [];
    if (paquetes12 > 0) {
        partes.push(`${paquetes12} paquete${paquetes12 !== 1 ? 's' : ''} (${paquetes12 * 12} und)`);
    }
    if (resto > 0) {
        partes.push(`${resto} und`);
    }
    return partes.join(" + ");
}

function addToCart(product) {
    let existing = cart.find(i => i.productId === product.id);
    if (existing) {
        let nueva = existing.cantidad + product.step;
        if (nueva > product.stock) {
            showToast(`Stock máximo para ${product.nombre}`);
            return;
        }
        existing.cantidad = nueva;
    } else {
        cart.push({
            productId: product.id,
            nombre: product.nombre,
            categoria: product.categoria,
            presentacion: product.presentacion,
            contenido: product.contenido,
            cantidad: product.minimo,
            stockMax: product.stock,
            tipoUnidad: product.tipoUnidad,
            step: product.step,
            hex: product.hex
        });
    }
    saveCart();
    updateCartUI();
    showToast(`✓ ${product.nombre} · +3 und`);
}

function changeQty(productId, delta) {
    let idx = cart.findIndex(i => i.productId === productId);
    if (idx === -1) return;
    let step = cart[idx].step || 3;
    let nueva = cart[idx].cantidad + (delta * step);
    if (nueva <= 0) {
        cart.splice(idx, 1);
    } else {
        if (nueva > cart[idx].stockMax) nueva = cart[idx].stockMax;
        cart[idx].cantidad = nueva;
    }
    saveCart();
    updateCartUI();
}

// ==================== MODAL DE CONFIRMACIÓN ====================
function openClearModal() {
    const modal = document.getElementById('clearModal');
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-card').classList.remove('scale-95');
    modal.querySelector('.modal-card').classList.add('scale-100');
    document.body.style.overflow = 'hidden';
}

function closeClearModal() {
    const modal = document.getElementById('clearModal');
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-card').classList.remove('scale-100');
    modal.querySelector('.modal-card').classList.add('scale-95');
    document.body.style.overflow = '';
}

function confirmClearCart() {
    closeClearModal();
    cart = [];
    saveCart();
    updateCartUI();
    showToast('Carrito vaciado');
}

// ==================== ACTUALIZAR UI DEL CARRITO ====================
function updateCartUI() {
    let totalEnvases = cart.reduce((s, i) => s + i.cantidad, 0);
    let totalPaquetesDe3 = totalEnvases / 3;
    let badge = document.getElementById("cartBadge");
    if (badge) {
        if (totalEnvases > 0) {
            badge.innerText = totalPaquetesDe3 > 99 ? "99+" : totalPaquetesDe3;
            badge.classList.remove("hidden");
            badge.classList.add("flex");
        } else {
            badge.classList.add("hidden");
        }
    }
    document.getElementById("cartCount").innerHTML = `(<span class="text-neon-green font-bold text-base">${totalEnvases} envases</span>)`;
    
    let emptyDiv = document.getElementById("cartEmpty"),
        itemsDiv = document.getElementById("cartItems"),
        footer = document.getElementById("cartFooter");
    if (totalEnvases === 0) {
        emptyDiv.classList.remove("hidden");
        itemsDiv.classList.add("hidden");
        footer.classList.add("hidden");
        return;
    }
    emptyDiv.classList.add("hidden");
    itemsDiv.classList.remove("hidden");
    footer.classList.remove("hidden");

    // Botón "Vaciar Carrito" dentro de la lista (con el mismo tamaño que "Envase 60ml")
    let itemsHtml = `<div class="flex justify-end mb-4">
        <button onclick="openClearModal()" class="flex items-center gap-2 text-neon-green text-xs md:text-sm font-medium hover:underline transition-colors">
            <i data-lucide="trash-2" class="w-4 h-4"></i> Vaciar Carrito
        </button>
    </div>`;

    itemsHtml += cart.map(item => {
        let envases = item.cantidad;
        let cantidadTexto = formatCantidadConPaquetes(envases);
        let paquetesDe3 = envases / 3;
        let colorCircle = `<span class="color-circle" style="background: ${item.hex};"></span>`;
        return `<div class="glass-card p-5 rounded-3xl flex flex-col gap-4">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="font-semibold text-white tracking-tight leading-tight mb-1">${colorCircle}${escapeHtml(item.nombre)}</p>
                            <p class="text-neon-green text-xs md:text-sm font-medium">${item.presentacion}</p>
                        </div>
                        <button onclick="changeQty('${item.productId}', -${item.cantidad})" class="text-zinc-600 hover:text-neon-primary transition-colors">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                    <div class="flex items-center justify-between">
                        <!-- Cantidad con el mismo tamaño que "Envase 60ml" -->
                        <div class="text-xs md:text-sm font-bold neon-primary uppercase tracking-tighter">
                            ${cantidadTexto}
                        </div>
                        <div class="flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
                            <button onclick="changeQty('${item.productId}', -1)" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10"><i data-lucide="minus" class="w-4 h-4"></i></button>
                            <span class="w-8 text-center text-sm font-bold text-white">${paquetesDe3}</span>
                            <button onclick="changeQty('${item.productId}', 1)" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10"><i data-lucide="plus" class="w-4 h-4"></i></button>
                        </div>
                    </div>
                </div>`;
    }).join("");

    itemsDiv.innerHTML = itemsHtml;
    
    // Resumen por marca con formato de paquetes
    let summaryMap = new Map();
    cart.forEach(item => {
        let marca = item.categoria;
        let env = item.cantidad;
        if (summaryMap.has(marca)) {
            summaryMap.get(marca).envases += env;
        } else {
            summaryMap.set(marca, { envases: env });
        }
    });
    let summaryDiv = document.getElementById("cartSummaryLines");
    if (summaryDiv) {
        let html = "";
        for (let [marca, val] of summaryMap.entries()) {
            let totalTexto = formatCantidadConPaquetes(val.envases);
            html += `<span class="bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-[9px] font-bold px-3 py-1.5 rounded-full border border-[var(--color-primary)]/30 uppercase tracking-wider">${marca}: ${totalTexto}</span>`;
        }
        summaryDiv.innerHTML = html;
    }
    lucide.createIcons();
}

function sendWhatsApp() {
    if (cart.length === 0) {
        alert("Carrito vacío");
        return;
    }
    let msg = `📋 SOLICITUD DE COTIZACIÓN - PINTURAS AL FRÍO%0A%0A`;
    msg += `Destinatario: INVERSIONES GUICAR 2025%0A%0A`;
    msg += `Estimados, reciban un cordial saludo. Agradecemos cotización de los siguientes colores (múltiplos de 3 envases):%0A%0A`;
    
    cart.forEach(item => {
        let envases = item.cantidad;
        let cantidadTexto = formatCantidadConPaquetes(envases);
        msg += `🔹 ${item.nombre}%0A`;
        msg += `➤ ${cantidadTexto}%0A%0A`;
    });
    
    let totalEnvases = cart.reduce((s, i) => s + i.cantidad, 0);
    let totalTexto = formatCantidadConPaquetes(totalEnvases);
    msg += `📦 RESUMEN TOTAL%0A`;
    msg += `• ${totalTexto}%0A%0A`;
    msg += `✨ Gestión de Ventas: JONATHAN RANGEL%0A`;
    msg += `Quedo atento a su pronta respuesta.`;
    
    window.open(`https://wa.me/584122891366?text=${msg}`, '_blank');
}

function getCategories() {
    return [
        { id: "blackcolor", nombre: "BLACKCOLOR" },
        { id: "la-nieve", nombre: "LA NIEVE" }
    ];
}

function renderCategories() {
    let cats = getCategories();
    let grid = document.getElementById("categoryGrid");
    grid.innerHTML = cats.map(cat => `<div class="glass-card rounded-3xl p-8 cursor-pointer flex flex-col items-center text-center group" onclick="openCategory('${cat.id}')">
                <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary)]/10 transition-all duration-500">
                    <i data-lucide="droplet" class="w-8 h-8 text-white/40 group-hover:text-[var(--color-primary)] transition-colors"></i>
                </div>
                <h3 class="text-xl font-medium tracking-tight text-white mb-2">${cat.nombre}</h3>
                <p class="text-zinc-500 text-xs uppercase tracking-widest font-bold group-hover:text-[var(--color-primary)] transition-colors">Ver colores</p>
            </div>`).join("");
    lucide.createIcons();
}

function openCategory(catId) {
    let catNombre = catId === "blackcolor" ? "BLACKCOLOR" : "LA NIEVE";
    currentCategory = catNombre;
    document.getElementById("categoriesView").style.display = "none";
    document.getElementById("productsView").style.display = "block";
    let prods = products.filter(p => p.categoria === catNombre);
    let html = `<div class="mb-10">
                    <h2 class="text-4xl font-light tracking-tight">${catNombre} <span class="font-bold text-neon-green">Pinturas al Frío</span></h2>
                    <p class="text-neon-green text-sm md:text-base font-medium mt-1">Venta por múltiplos de 3 envases · 12 und = 1 paquete</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">`;
    prods.forEach(p => {
        let colorCircle = `<span class="color-circle" style="background: ${p.hex};"></span>`;
        html += `<div class="glass-card p-6 rounded-3xl flex justify-between items-center group">
                            <div>
                                <h3 class="font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">${colorCircle}${escapeHtml(p.nombre)}</h3>
                                <p class="text-neon-green text-xs md:text-sm font-medium mt-1">Envase 60ml · Agregar 3 und</p>
                            </div>
                            <button onclick="addToCartById('${p.id}')" class="btn-agregar px-6 py-2.5 rounded-2xl text-[10px] font-bold uppercase tracking-widest">AGREGAR</button>
                        </div>`;
    });
    html += `</div>`;
    document.getElementById("productsContent").innerHTML = html;
    lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addToCartById(pid) {
    let product = products.find(p => p.id === pid);
    if (product) addToCart(product);
}

function goBack() {
    document.getElementById("categoriesView").style.display = "block";
    document.getElementById("productsView").style.display = "none";
}

function openCart() {
    document.getElementById("cartPanel").classList.remove("closed");
    document.getElementById("cartPanel").classList.add("open");
    document.getElementById("cartOverlay").classList.remove("opacity-0", "pointer-events-none");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    document.getElementById("cartPanel").classList.remove("open");
    document.getElementById("cartPanel").classList.add("closed");
    document.getElementById("cartOverlay").classList.add("opacity-0", "pointer-events-none");
    document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    loadCart();
    lucide.createIcons();
});
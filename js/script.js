// ========== DATOS ==========
const lisoGrupos = [
    { nombre: "Básicos y Neutros", colores: ["Blanco", "Beige Crema", "Piel Canela", "Gris Perla", "Gris", "Negro"] },
    { nombre: "Amarillos y Naranjas", colores: ["Amarillo", "Amarillo Bandera", "Amarillo Oro", "Naranja Medio", "Naranja Intenso"] },
    { nombre: "Rojos y Vinotinto", colores: ["Rojo", "Rojo Bandera", "Rojo Intenso", "Vinotinto"] },
    { nombre: "Rosados y Fucsias", colores: ["Rosado Bebe", "Rosado", "Rosado Colonial", "Rosado V.", "Fucsia", "Fucsia New", "Fucsia Magenta", "Guayaba Salmón"] },
    { nombre: "Morados y Lilas", colores: ["Lila", "Lila Medio", "Lila Oscuro", "Morado", "Morado Claro", "Azul Violeta", "Violeta Mora", "Violeta Obispo"] },
    { nombre: "Azules", colores: ["Azul Bebe", "Azul Cielo", "Azul Claro", "Azul Celeste", "Azul Turquesa", "Azul Eléctrico", "Azul Rey", "Azul Marino", "Azul Ultra Marino", "Azul Bandera"] },
    { nombre: "Verdes", colores: ["Verde Manzana", "Verde Neon", "Verde Claro", "Verde Grama", "Verde Mar", "Verde Aguamarino", "Verde Aquamarine", "Verde Esmeralda"] },
    { nombre: "Tierra (Marrón)", colores: ["Marrón Claro", "Marrón Oscuro", "Marrón Chocolate", "Marrón Tabaco"] }
];

const escarchadoGrupos = [
    { nombre: "Metales y Neutros", colores: ["Blanco", "Blanco Tornasol", "Plata", "Gris Oscuro", "Negro", "Beige", "Champagne", "Café", "Marrón Oscuro", "Marrón Tornasol"] },
    { nombre: "Dorados y Bronces", colores: ["Amarillo", "Amarillo Oscuro", "Dorado Claro", "Dorado Oscuro", "Oro Rico", "Oro Ducato", "Oro", "Bronce", "Cobre", "Rosa Oro / Oro Rosa"] },
    { nombre: "Rojos y Naranjas", colores: ["Naranja", "Rojo", "Rojo Navidad", "Rojo Ladrillo", "Vinotinto"] },
    { nombre: "Rosados y Fucsias", colores: ["Rosa Pastel", "Rosa Claro", "Rosado", "Rosa C", "Rosa Vieja", "Frambuesa", "Fucsia", "Magenta"] },
    { nombre: "Morados y Lilas", colores: ["Lila", "Lila Tornasol", "Morado", "Violeta"] },
    { nombre: "Azules", colores: ["Azul Pastel", "Azul Cielo", "Azul Celeste", "Azul Turquesa", "Azul Zafiro", "Azul Rey", "Azul Marino"] },
    { nombre: "Verdes", colores: ["Verde Mar", "Verde Aguamarina", "Verde Jade", "Verde Esmeralda", "Verde Grama"] }
];

function getHexFromName(nombre) {
    const mapa = {
        "Blanco":"#FFFFFF","Beige Crema":"#F5E6D3","Piel Canela":"#D2B48C","Gris Perla":"#B0B0B0","Gris":"#808080","Negro":"#1A1A1A",
        "Amarillo":"#FFE135","Amarillo Bandera":"#FFD700","Amarillo Oro":"#FFC200","Naranja Medio":"#FF8C00","Naranja Intenso":"#FF6600",
        "Rojo":"#E60000","Rojo Bandera":"#CE1126","Rojo Intenso":"#CC0000","Vinotinto":"#5C1018",
        "Rosado Bebe":"#FFB6C1","Rosado":"#FF91A4","Rosado Colonial":"#F4A460","Rosado V.":"#E88DA0","Fucsia":"#E91E8C","Fucsia New":"#FF00AA","Fucsia Magenta":"#FF1493","Guayaba Salmón":"#FA8072",
        "Lila":"#C8A2C8","Lila Medio":"#BA55D3","Lila Oscuro":"#8B008B","Morado":"#7B2D8E","Morado Claro":"#AF7AC5","Azul Violeta":"#8A2BE2","Violeta Mora":"#4B0082","Violeta Obispo":"#9400D3",
        "Azul Bebe":"#89CFF0","Azul Cielo":"#87CEEB","Azul Claro":"#6CB4EE","Azul Celeste":"#ADD8E6","Azul Turquesa":"#40E0D0","Azul Eléctrico":"#2E5EAA","Azul Rey":"#1A3C8F","Azul Marino":"#1B2A6B","Azul Ultra Marino":"#0D1B7A","Azul Bandera":"#00308F",
        "Verde Manzana":"#8DB600","Verde Neon":"#39FF14","Verde Claro":"#90EE90","Verde Grama":"#4CAF50","Verde Mar":"#2E8B57","Verde Aguamarino":"#3EB489","Verde Aquamarine":"#7FFFD4","Verde Esmeralda":"#50C878",
        "Marrón Claro":"#A0522D","Marrón Oscuro":"#3E2723","Marrón Chocolate":"#5D3A1A","Marrón Tabaco":"#6F4E37",
        "Blanco Tornasol":"#F0F0F0","Plata":"#C0C0C0","Champagne":"#F7E7CE","Café":"#6F4E37","Marrón Tornasol":"#5D4037","Amarillo Oscuro":"#D4A017","Dorado Claro":"#F0D58C","Dorado Oscuro":"#B8860B","Oro Rico":"#FFD700","Oro Ducato":"#DAA520","Oro":"#DAA520","Bronce":"#CD7F32","Cobre":"#B87333","Rosa Oro / Oro Rosa":"#E8B4B8",
        "Naranja":"#FFA500","Rojo Navidad":"#B22222","Rojo Ladrillo":"#B5462A","Rosa Pastel":"#F4C2C2","Rosa Claro":"#FFC0CB","Rosa C":"#FF69B4","Rosa Vieja":"#D4788C","Frambuesa":"#E30B5C","Magenta":"#FF00FF","Lila Tornasol":"#C8A2C8","Violeta":"#8B00FF","Azul Pastel":"#A4C8E1","Azul Zafiro":"#0F52BA","Verde Aguamarina":"#66CDAA","Verde Jade":"#00A86B"
    };
    return mapa[nombre] || "#CCCCCC";
}

const totalLiso = lisoGrupos.reduce((a,g)=>a+g.colores.length,0);
const totalEscarchado = escarchadoGrupos.reduce((a,g)=>a+g.colores.length,0);

const categories = [
    { id: "carta-liso", nombre: "Foami Tamaño Carta Liso", tamaño: "Tamaño Carta", tipo: "liso", icono: "layers", esPaquete: true, paqueteUnidades: 10, totalColores: totalLiso },
    { id: "carta-esc", nombre: "Foami Tamaño Carta Escarchado", tamaño: "Tamaño Carta", tipo: "escarchado", icono: "sparkles", esPaquete: true, paqueteUnidades: 10, totalColores: totalEscarchado },
    { id: "doble-liso", nombre: "Foami Doble Carta Liso", tamaño: "Doble Carta", tipo: "liso", icono: "square", esPaquete: true, paqueteUnidades: 10, totalColores: totalLiso },
    { id: "doble-esc", nombre: "Foami Doble Carta Escarchado", tamaño: "Doble Carta", tipo: "escarchado", icono: "gem", esPaquete: true, paqueteUnidades: 10, totalColores: totalEscarchado },
    { id: "lamina-liso", nombre: "Lámina 60×80 Liso", tamaño: "Lámina 60×80", tipo: "liso", icono: "maximize-2", esPaquete: false, totalColores: totalLiso },
    { id: "lamina-esc", nombre: "Lámina 60×80 Escarchado", tamaño: "Lámina 60×80", tipo: "escarchado", icono: "crown", esPaquete: false, totalColores: totalEscarchado }
];

let cart = [];
let currentCategory = null;

// ========== HELPERS ==========
function getCartColor(totalUnits) {
    let t = Math.min(totalUnits, 100) / 100;
    let hue = 150 - (t * 125);
    let sat = 70 + (t * 20);
    let light = 45 + (t * 10);
    return `hsl(${hue}, ${sat}%, ${light}%)`;
}

function saveCart() { localStorage.setItem("foami_cart_lux", JSON.stringify(cart)); }
function loadCart() { const s = localStorage.getItem("foami_cart_lux"); if(s) try { cart = JSON.parse(s); if(!Array.isArray(cart)) cart=[]; } catch(e){cart=[];} updateCartUI(); }
function isVeryLight(hex) { if(!hex) return false; const r=parseInt(hex.slice(1,3),16), g=parseInt(hex.slice(3,5),16), b=parseInt(hex.slice(5,7),16); return (r*0.299+g*0.587+b*0.114)>210; }
function escapeHtml(str) { return str.replace(/[&<>]/g, m => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;" }[m])); }
function showToast(msg, hex) {
    const ctn = document.getElementById("toastContainer"); if(!ctn) return;
    const t = document.createElement("div"); t.className = "toast-enter pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl glass backdrop-blur-md border border-white/15 max-w-xs shadow-xl";
    t.innerHTML = `<div class="w-3 h-3 rounded-full shadow-md" style="background-color:${hex}"></div><span class="text-sm text-white font-medium">${escapeHtml(msg)}</span>`;
    ctn.appendChild(t);
    setTimeout(() => { t.remove(); }, 2200);
}

// ========== CARRITO ==========
function addToCart(category, nombre, hex) {
    const existing = cart.find(i => i.categoryId === category.id && i.nombre === nombre);
    const addUnits = category.esPaquete ? category.paqueteUnidades : 1;
    if(existing) {
        existing.cantidadUnidades += addUnits;
    } else {
        cart.push({
            id: Date.now()+Math.random(),
            categoryId: category.id,
            categoryNombre: category.nombre,
            nombre: nombre,
            hex: hex,
            esPaquete: category.esPaquete,
            unidadesPorPaquete: category.esPaquete ? category.paqueteUnidades : 1,
            cantidadUnidades: addUnits
        });
    }
    saveCart(); updateCartUI();
    const msg = category.esPaquete ? `+1 paquete (${category.paqueteUnidades} und) · ${nombre}` : `+1 unidad · ${nombre}`;
    showToast(msg, hex);
}

function changeQty(idx, deltaUnidades) {
    const item = cart[idx];
    if(!item) return;
    let nueva = item.cantidadUnidades + deltaUnidades;
    if(nueva <= 0) cart.splice(idx,1);
    else {
        if(item.esPaquete) {
            let resto = nueva % item.unidadesPorPaquete;
            if(resto !== 0) nueva = nueva - resto;
            if(nueva <= 0) cart.splice(idx,1);
            else item.cantidadUnidades = nueva;
        } else { item.cantidadUnidades = nueva; }
    }
    saveCart(); updateCartUI();
}

function clearCart() { cart = []; saveCart(); updateCartUI(); showToast("Carrito vaciado", "#888"); }

// ========== MODAL ==========
function openClearModal() {
    const modal = document.getElementById('clearModal');
    if (!modal) return;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.classList.add('opacity-100', 'pointer-events-auto');
    document.body.style.overflow = 'hidden';
    const card = modal.querySelector('.relative');
    if (card) {
        card.classList.remove('scale-95');
        card.classList.add('scale-100');
    }
}

function closeClearModal() {
    const modal = document.getElementById('clearModal');
    if (!modal) return;
    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
    const card = modal.querySelector('.relative');
    if (card) {
        card.classList.remove('scale-100');
        card.classList.add('scale-95');
    }
}

function confirmClearCart() {
    clearCart();
    closeClearModal();
}

// ========== ACTUALIZAR UI DEL CARRITO ==========
function updateCartUI() {
    const totalUnits = cart.reduce((s,i)=>s+i.cantidadUnidades, 0);
    const totalPackages = cart.reduce((s,i)=>s + (i.esPaquete ? (i.cantidadUnidades / i.unidadesPorPaquete) : i.cantidadUnidades), 0);
    
    const cartColor = getCartColor(totalUnits);
    const badgeEl = document.getElementById('cartBadge');
    if (badgeEl) {
        badgeEl.style.backgroundColor = cartColor;
        badgeEl.style.transition = 'background-color 0.2s ease';
    }
    const floatingBtn = document.getElementById('floatingCartBtn');
    if (floatingBtn) {
        floatingBtn.style.borderColor = cartColor;
        floatingBtn.style.boxShadow = `0 0 8px ${cartColor}`;
    }
    const cartIcon = document.querySelector('header .relative button:last-child i');
    if (cartIcon) {
        cartIcon.style.color = totalUnits > 0 ? cartColor : '';
    }

    const fbadge = document.getElementById('floatingBadge');
    const emptyDiv = document.getElementById('cartEmpty');
    const itemsDiv = document.getElementById('cartItems');
    const footer = document.getElementById('cartFooter');

    if (totalUnits > 0) {
        badgeEl?.classList.remove('hidden'); badgeEl?.classList.add('flex','badge-bounce');
        const badgeText = totalPackages > 99 ? '99+' : totalPackages;
        badgeEl.textContent = badgeText;
        if(fbadge) { fbadge.textContent = badgeText; fbadge.classList.remove('hidden'); fbadge.classList.add('flex'); fbadge.style.backgroundColor = cartColor; }
        emptyDiv?.classList.add('hidden'); itemsDiv?.classList.remove('hidden');
        footer?.classList.remove('hidden'); footer?.classList.add('flex','flex-col');
        setTimeout(() => badgeEl?.classList.remove('badge-bounce'), 400);
    } else {
        badgeEl?.classList.add('hidden'); badgeEl?.classList.remove('flex');
        if(fbadge) fbadge.classList.add('hidden');
        emptyDiv?.classList.remove('hidden'); itemsDiv?.classList.add('hidden');
        footer?.classList.add('hidden'); footer?.classList.remove('flex','flex-col');
    }

    // Desglose por categorías
    const categorias = {
        "carta-liso": { paq: 0, und: 0, nombre: "Carta Liso" },
        "carta-esc": { paq: 0, und: 0, nombre: "Carta Escarchado" },
        "doble-liso": { paq: 0, und: 0, nombre: "Doble Carta Liso" },
        "doble-esc": { paq: 0, und: 0, nombre: "Doble Carta Escarchado" },
        "lamina-liso": { paq: 0, und: 0, nombre: "Lámina Liso" },
        "lamina-esc": { paq: 0, und: 0, nombre: "Lámina Escarchado" }
    };
    cart.forEach(item => {
        const catId = item.categoryId;
        if (categorias[catId]) {
            if (item.esPaquete) {
                const paquetes = item.cantidadUnidades / item.unidadesPorPaquete;
                categorias[catId].paq += paquetes;
                categorias[catId].und += item.cantidadUnidades;
            } else {
                categorias[catId].paq += item.cantidadUnidades;
                categorias[catId].und += item.cantidadUnidades;
            }
        }
    });

    let desgloseHtml = '';
    for (const [key, val] of Object.entries(categorias)) {
        if (val.paq > 0) {
            const icon = (key.includes('lamina') ? 'maximize-2' : (key.includes('esc') ? 'sparkles' : 'layers'));
            desgloseHtml += `<span class="inline-flex items-center gap-1 font-bold"><i data-lucide="${icon}" class="w-4 h-4 text-neon-green"></i><span class="text-neon-green">${val.nombre}:</span> ${val.paq} paq (${val.und} und)</span>`;
        }
    }
    if (cart.length > 0) {
        desgloseHtml += `<span class="text-amber-400 font-bold ml-2">${cart.length} producto(s) distinto(s)</span>`;
    }

    if (footer) {
        footer.innerHTML = `
            <div class="flex flex-wrap items-center justify-between gap-2 text-base font-bold">
                <div id="cartSummaryLines" class="flex flex-wrap items-center gap-2 text-zinc-300">${desgloseHtml}</div>
                <div class="flex items-baseline gap-2">
                    <span class="text-base text-zinc-400 font-bold">Total unidades</span>
                    <span id="cartTotal" class="text-base font-bold text-white">${totalUnits}</span>
                </div>
            </div>
            <button onclick="sendWhatsApp()" class="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] py-3.5 rounded-xl text-white font-bold flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-transform active:scale-95">
                <i data-lucide="send" class="w-4 h-4"></i>Enviar pedido por WhatsApp
            </button>
            <button onclick="openClearModal()" class="w-full py-4 text-sm md:text-base font-bold uppercase tracking-wider rounded-xl border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 transition">Vaciar carrito</button>
        `;
        lucide.createIcons();
    }

    if(itemsDiv) {
        let itemsHtml = cart.map((item, idx) => {
            const totalItemUnits = item.cantidadUnidades;
            let textoUnidad = '';
            if (item.esPaquete) {
                const paquetes = totalItemUnits / item.unidadesPorPaquete;
                textoUnidad = `${paquetes} paquete(s) = ${totalItemUnits} und`;
            } else {
                textoUnidad = `${totalItemUnits} unidad(es)`;
            }
            let catBadge = '';
            if (item.categoryId.includes('carta')) catBadge = '<span class="text-[8px] bg-sky-500/20 text-sky-300 px-1.5 py-0.5 rounded-full">Tamaño Carta</span>';
            else if (item.categoryId.includes('doble')) catBadge = '<span class="text-[8px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full">Doble Carta</span>';
            else if (item.categoryId.includes('lamina')) catBadge = '<span class="text-[8px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded-full">Lámina</span>';
            const cantidadClase = "text-xs md:text-sm font-bold neon-primary uppercase tracking-tighter";
            return `<div class="flex items-center gap-3 p-3 rounded-xl glass-card bg-black/40 slide-in">
                <div class="w-11 h-11 rounded-xl border border-white/10" style="background:${item.hex}; box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <p class="text-sm font-semibold text-white truncate">${escapeHtml(item.nombre)}</p>
                        ${catBadge}
                    </div>
                    <p class="text-sm text-neon-green font-semibold">${escapeHtml(item.categoryNombre)}</p>
                    <p class="${cantidadClase}">${textoUnidad}</p>
                </div>
                <div class="flex items-center gap-1">
                    <button onclick="changeQty(${idx}, -${item.unidadesPorPaquete})" class="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center"><i data-lucide="minus" class="w-3.5 h-3.5 text-white"></i></button>
                    <span class="w-6 text-center text-sm text-white">${item.esPaquete ? (item.cantidadUnidades / item.unidadesPorPaquete) : item.cantidadUnidades}</span>
                    <button onclick="changeQty(${idx}, ${item.unidadesPorPaquete})" class="w-7 h-7 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center"><i data-lucide="plus" class="w-3.5 h-3.5 text-white"></i></button>
                    <button onclick="changeQty(${idx}, -${item.cantidadUnidades})" class="w-7 h-7 rounded-md bg-white/5 hover:bg-red-500/20 flex items-center justify-center ml-1"><i data-lucide="trash-2" class="w-3.5 h-3.5 text-red-300"></i></button>
                </div>
            </div>`;
        }).join('');
        itemsDiv.innerHTML = itemsHtml;
        lucide.createIcons();
    }
}

// ========== RENDER CATEGORÍAS ==========
function renderCategories() {
    const grid = document.getElementById("categoryGrid");
    if(!grid) return;
    grid.innerHTML = categories.map(cat => `
        <div class="glass-card rounded-2xl p-5 cursor-pointer transition-all duration-300 group category-card" onclick="openCategory('${cat.id}')">
            <div class="flex justify-between items-start mb-4">
                <div class="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <!-- Ícono fijo "layers" para todas las categorías -->
                    <i data-lucide="layers" class="w-5 h-5 text-orange-400"></i>
                </div>
            </div>
            <h3 class="text-xl font-bold text-white mb-1.5">${cat.nombre}</h3>
            <p class="text-white font-bold mb-3" style="text-shadow: 0 0 10px rgba(255,255,255,0.6);">✨ ${cat.totalColores} colores disponibles</p>
            <p class="text-base font-bold text-neon-green">${cat.esPaquete ? 'Paquete x10 unidades' : 'Venta por unidad'}</p>
            <div class="mt-4 text-sm flex items-center gap-1 font-medium group-hover:gap-2 transition-all explore-text">
                Explorar paleta <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function openCategory(catId) {
    currentCategory = categories.find(c=>c.id===catId);
    if(!currentCategory) return;
    document.getElementById("categoriesView").classList.add("hidden");
    document.getElementById("colorsView").classList.remove("hidden");
    if(!document.getElementById("backBtnContainer")) addBackButton();
    document.getElementById("backBtnContainer").classList.remove("hidden");
    renderColorsView();
    window.scrollTo({top:0,behavior:"smooth"});
}

function addBackButton() {
    if(document.getElementById("backBtnContainer")) return;
    const colorsView = document.getElementById("colorsView");
    const container = document.createElement("div");
    container.id = "backBtnContainer";
    container.className = "mb-5 flex items-center gap-3";
    container.innerHTML = `<button onclick="goBack()" class="flex items-center gap-1.5 text-white/80 hover:text-white font-bold glass px-4 py-2 rounded-full text-sm transition-all"><i data-lucide="arrow-left" class="w-4 h-4"></i> Volver a categorías</button><span id="categoryTitle" class="text-lg font-bold text-white"></span>`;
    colorsView.insertBefore(container, colorsView.firstChild);
    lucide.createIcons();
}

function renderColorsView() {
    const cont = document.getElementById("colorsContent");
    if(!cont || !currentCategory) return;
    const grupos = currentCategory.tipo === "liso" ? lisoGrupos : escarchadoGrupos;
    const titleSpan = document.getElementById("categoryTitle");
    if(titleSpan) titleSpan.innerText = `— ${currentCategory.nombre}`;
    let html = `<div class="mb-8 flex flex-wrap items-center gap-3 border-b border-white/10 pb-4"><div class="p-2 rounded-xl glass"><i data-lucide="${currentCategory.icono}" class="w-7 h-7 text-orange-400"></i></div><div><h2 class="text-3xl font-bold text-white">${currentCategory.nombre}</h2>
        <p class="text-base font-bold text-neon-green">${currentCategory.esPaquete ? 'Venta por paquetes de 10 unidades' : 'Venta por unidad (lámina individual)'}</p>
    </div></div>`;
    grupos.forEach(grupo => {
        html += `<div class="mb-12"><div class="flex items-baseline gap-2 border-l-4 border-orange-500 pl-3 mb-4">
            <h3 class="text-lg font-bold text-white">${grupo.nombre}</h3>
            <span class="text-lg font-bold text-neon-green">${grupo.colores.length} tonos</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">`;
        grupo.colores.forEach(color => {
            const hex = getHexFromName(color);
            const borderLight = isVeryLight(hex) ? 'border border-white/50' : '';
            html += `<div class="swatch-item group relative rounded-2xl glass-card p-3 text-center cursor-pointer transition-all duration-200 hover:bg-white/5" onclick="addToCart(currentCategory, '${escapeHtml(color)}', '${hex}')">
                <div class="w-full aspect-square rounded-xl ${borderLight} shadow-inner transition-all duration-200 group-hover:shadow-lg" style="background-color: ${hex};"></div>
                <p class="text-sm font-bold text-neon-green truncate mt-2">${color}</p>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm rounded-2xl"><div class="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md"><i data-lucide="plus" class="w-4 h-4 text-black"></i></div></div>
            </div>`;
        });
        html += `</div></div>`;
    });
    cont.innerHTML = html;
    lucide.createIcons();
}

function goBack() {
    document.getElementById("categoriesView").classList.remove("hidden");
    document.getElementById("colorsView").classList.add("hidden");
    document.getElementById("backBtnContainer").classList.add("hidden");
    window.scrollTo({top:0,behavior:"smooth"});
}

// ========== PANEL CARRITO ==========
function openCart() { 
    document.getElementById("cartPanel").classList.remove("closed"); 
    document.getElementById("cartPanel").classList.add("open"); 
    document.getElementById("cartOverlay").classList.remove("opacity-0","pointer-events-none"); 
    document.getElementById("cartOverlay").classList.add("opacity-100","pointer-events-auto"); 
    document.body.style.overflow="hidden"; 
}
function closeCart() { 
    document.getElementById("cartPanel").classList.remove("open"); 
    document.getElementById("cartPanel").classList.add("closed"); 
    document.getElementById("cartOverlay").classList.remove("opacity-100","pointer-events-auto"); 
    document.getElementById("cartOverlay").classList.add("opacity-0","pointer-events-none"); 
    document.body.style.overflow=""; 
}

function sendWhatsApp() {
    if(cart.length===0) return;
    let msg = "🛍️ %2AFOAMI PREMIUM INVERSIONES GUICAR 2025%2A%0A%0A";
    cart.forEach(item => {
        const cantidadTexto = item.esPaquete ? `${item.cantidadUnidades/item.unidadesPorPaquete} paquetes (${item.cantidadUnidades} und)` : `${item.cantidadUnidades} unidad(es)`;
        msg += `• ${item.nombre} — ${item.categoryNombre} → ${cantidadTexto}%0A`;
    });
    msg += `%0A📦 *Total unidades:* ${cart.reduce((s,i)=>s+i.cantidadUnidades,0)}%0A✨ ¡Listo para cotizar!`;
    window.open(`https://wa.me/584122891366?text=${msg}`, '_blank');
}

// ========== INICIO ==========
document.addEventListener("DOMContentLoaded", () => {
    loadCart();
    renderCategories();
    lucide.createIcons();
});
/**
 * Balloon Decoration Patna - Main Client Application Logic
 * Service catalogue, lead generation, WhatsApp enquiry generator, and filters.
 * Client Phone: +91 91358 23576
 */

(function () {
  'use strict';

  // Application State
  const state = {
    selectedCategory: 'all',
    selectedBudget: 'all',
    sortBy: 'popularity',
    searchQuery: '',
    currentModalProduct: null
  };

  // DOM Elements cache
  const elements = {
    productsGrid: document.getElementById('productsGrid'),
    resultsCount: document.getElementById('resultsCount'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),
    categoryChipsContainer: document.getElementById('categoryChipsContainer'),
    occasionsNavCards: document.querySelectorAll('.occasion-card'),
    subnavLinks: document.querySelectorAll('.subnav-link'),
    budgetChips: document.querySelectorAll('.budget-chip'),
    sortSelect: document.getElementById('sortSelect'),
    headerSearchInput: document.getElementById('headerSearchInput'),
    catalogueSearchInput: document.getElementById('catalogueSearchInput'),
    
    // Modal
    productModal: document.getElementById('productModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalMainImage: document.getElementById('modalMainImage'),
    modalThumbsRow: document.getElementById('modalThumbsRow'),
    modalCategoryBadge: document.getElementById('modalCategoryBadge'),
    modalStatusBadge: document.getElementById('modalStatusBadge'),
    modalTitle: document.getElementById('modalTitle'),
    modalPriceCurrent: document.getElementById('modalPriceCurrent'),
    modalPriceOriginal: document.getElementById('modalPriceOriginal'),
    modalDesc: document.getElementById('modalDesc'),
    modalInclusionsList: document.getElementById('modalInclusionsList'),
    modalCustomisation: document.getElementById('modalCustomisation'),
    modalSetupTime: document.getElementById('modalSetupTime'),
    modalWhatsappBtn: document.getElementById('modalWhatsappBtn'),
    modalCallBtn: document.getElementById('modalCallBtn'),

    // Enquiry Form
    enquiryForm: document.getElementById('enquiryForm'),

    // Mobile Drawer
    mobileNavToggle: document.getElementById('mobileNavToggle'),
    mobileDrawerBackdrop: document.getElementById('mobileDrawerBackdrop'),
    drawerCloseBtn: document.getElementById('drawerCloseBtn'),

    // Lightbox
    lightboxBackdrop: document.getElementById('lightboxBackdrop'),
    lightboxImage: document.getElementById('lightboxImage'),
    lightboxCloseBtn: document.getElementById('lightboxCloseBtn'),

    // Scroll to top
    btnScrollTop: document.getElementById('btnScrollTop'),
    toastNotice: document.getElementById('toastNotice')
  };

  /**
   * Helper: Format Currency in INR
   */
  function formatCurrency(amount) {
    if (!amount) return '';
    return '₹' + Number(amount).toLocaleString('en-IN');
  }

  /**
   * Helper: Generate Product WhatsApp Link
   * Exactly as requested by client:
   * "Hello Balloon Decoration Patna, I am interested in [Decoration Name]. Please share the price, available dates, customisation options, and booking details."
   */
  function getProductWhatsAppUrl(product) {
    const rawMessage = `Hello Balloon Decoration Patna, I am interested in ${product.title}. Please share the price, available dates, customisation options, and booking details.`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(rawMessage)}`;
  }

  /**
   * Helper: Generate General Enquiry WhatsApp Link
   */
  function getGeneralWhatsAppUrl() {
    const rawMessage = `Hello Balloon Decoration Patna! I would like to enquire about balloon decoration services in Patna. Please share your catalogue and booking availability.`;
    return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(rawMessage)}`;
  }

  /**
   * Helper: Show Toast Notification
   */
  function showToast(message, duration = 3500) {
    if (!elements.toastNotice) return;
    elements.toastNotice.textContent = message;
    elements.toastNotice.classList.add('show');
    setTimeout(() => {
      elements.toastNotice.classList.remove('show');
    }, duration);
  }

  /**
   * Filter and Sort Products
   */
  function getFilteredProducts() {
    return PRODUCTS_DATA.filter(product => {
      // 1. Category Filter
      if (state.selectedCategory !== 'all') {
        const catMap = {
          'birthday': 'Birthday',
          'anniversary': 'Anniversary',
          'room-decoration': 'Room Decoration',
          'baby-welcome': 'Baby Welcome',
          'baby-shower': 'Baby Shower',
          'balloon-arches': 'Balloon Arches'
        };
        const targetCategory = catMap[state.selectedCategory] || state.selectedCategory;
        if (product.category.toLowerCase() !== targetCategory.toLowerCase()) {
          return false;
        }
      }

      // 2. Budget Filter
      if (state.selectedBudget !== 'all') {
        const price = product.startingPrice;
        if (state.selectedBudget === 'under-2500' && price >= 2500) return false;
        if (state.selectedBudget === '2500-4000' && (price < 2500 || price > 4000)) return false;
        if (state.selectedBudget === 'above-4000' && price <= 4000) return false;
      }

      // 3. Search Query Filter
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase().trim();
        const inTitle = product.title.toLowerCase().includes(q);
        const inCategory = product.category.toLowerCase().includes(q);
        const inDesc = product.shortDescription.toLowerCase().includes(q) || product.detailedDescription.toLowerCase().includes(q);
        const inInclusions = product.inclusions && product.inclusions.some(inc => inc.toLowerCase().includes(q));
        if (!inTitle && !inCategory && !inDesc && !inInclusions) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (state.sortBy === 'price-low') {
        return a.startingPrice - b.startingPrice;
      } else if (state.sortBy === 'price-high') {
        return b.startingPrice - a.startingPrice;
      } else {
        // Popularity: default sort by reviewsCount or rating
        return (b.reviewsCount || 0) - (a.reviewsCount || 0);
      }
    });
  }

  /**
   * Render Product Cards
   */
  function renderProducts() {
    if (!elements.productsGrid) return;

    const filtered = getFilteredProducts();

    // Update result counts
    if (elements.resultsCount) {
      elements.resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> decoration designs`;
    }

    // Toggle reset filters button visibility
    const isFiltered = state.selectedCategory !== 'all' || state.selectedBudget !== 'all' || state.searchQuery !== '';
    if (elements.resetFiltersBtn) {
      elements.resetFiltersBtn.style.display = isFiltered ? 'inline-block' : 'none';
    }

    if (filtered.length === 0) {
      elements.productsGrid.innerHTML = `
        <div class="catalogue-empty">
          <div class="catalogue-empty-icon">🎈</div>
          <h3>No matching decorations found</h3>
          <p>We couldn't find designs matching "${state.searchQuery || state.selectedCategory}". WhatsApp us directly to share any custom balloon photo or theme!</p>
          <button type="button" class="btn-primary" id="emptyResetBtn" style="margin-right: 0.5rem;">Reset Filters</button>
          <a href="${getGeneralWhatsAppUrl()}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-hero">
            Ask Custom Theme on WhatsApp
          </a>
        </div>
      `;
      const emptyResetBtn = document.getElementById('emptyResetBtn');
      if (emptyResetBtn) {
        emptyResetBtn.addEventListener('click', resetAllFilters);
      }
      return;
    }

    elements.productsGrid.innerHTML = filtered.map(product => {
      const discount = product.originalPrice 
        ? Math.round(((product.originalPrice - product.startingPrice) / product.originalPrice) * 100)
        : null;

      const waUrl = getProductWhatsAppUrl(product);

      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-image-wrap" role="button" tabindex="0" aria-label="View details for ${product.title}">
            <img src="${product.image}" alt="${product.title}" loading="lazy" width="400" height="400" />
            <span class="product-badge">${product.badge || 'Popular'}</span>
            <span class="product-category-tag">${product.category}</span>
            <span class="product-quick-view-btn">🔍 View Details</span>
          </div>

          <div class="product-body">
            <h3 class="product-title" role="button" tabindex="0">${product.title}</h3>
            <p class="product-short-desc">${product.shortDescription}</p>

            <div class="product-meta-row">
              <div class="product-pricing">
                <span class="product-starting-label">Starting from</span>
                <span class="product-price-current">${formatCurrency(product.startingPrice)}*</span>
                ${product.originalPrice ? `<span class="product-price-original">${formatCurrency(product.originalPrice)}</span>` : ''}
                ${discount ? `<span class="product-discount-pill">${discount}% off</span>` : ''}
              </div>
            </div>

            <div class="product-actions-row">
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-whatsapp" aria-label="Enquire about ${product.title} on WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.587 1.841.879 2.796.879 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.828c0 5.518-4.482 10-10 10-1.782 0-3.454-.471-4.9-1.293l-5.1 1.336 1.365-4.992c-.933-1.498-1.465-3.262-1.465-5.051 0-5.518 4.482-10 10-10s10 4.482 10 10z"/>
                </svg>
                WhatsApp Enquiry
              </a>
              <button type="button" class="btn-card-details" aria-label="View details modal">
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click handlers to cards
    attachCardListeners();
  }

  /**
   * Attach card click events (Modal view & quick view)
   */
  function attachCardListeners() {
    const cards = elements.productsGrid.querySelectorAll('.product-card');
    cards.forEach(card => {
      const id = card.getAttribute('data-id');
      const product = PRODUCTS_DATA.find(p => p.id === id);
      if (!product) return;

      const triggerOpen = () => openProductModal(product);

      const imageWrap = card.querySelector('.product-image-wrap');
      const title = card.querySelector('.product-title');
      const detailsBtn = card.querySelector('.btn-card-details');

      if (imageWrap) imageWrap.addEventListener('click', triggerOpen);
      if (title) title.addEventListener('click', triggerOpen);
      if (detailsBtn) detailsBtn.addEventListener('click', triggerOpen);
    });
  }

  /**
   * Open Product Detail Modal
   */
  function openProductModal(product) {
    state.currentModalProduct = product;

    if (!elements.productModal) return;

    // Set images
    const images = product.additionalImages && product.additionalImages.length > 0 
      ? product.additionalImages 
      : [product.image];

    elements.modalMainImage.src = images[0];
    elements.modalMainImage.alt = product.title;

    // Render thumbnails
    elements.modalThumbsRow.innerHTML = images.map((imgSrc, idx) => `
      <div class="modal-thumb ${idx === 0 ? 'active' : ''}" data-src="${imgSrc}">
        <img src="${imgSrc}" alt="${product.title} angle ${idx + 1}" loading="lazy" />
      </div>
    `).join('');

    // Attach thumbnail click handlers
    elements.modalThumbsRow.querySelectorAll('.modal-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        elements.modalThumbsRow.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        elements.modalMainImage.src = thumb.getAttribute('data-src');
      });
    });

    // Set text details
    elements.modalCategoryBadge.textContent = product.category;
    elements.modalStatusBadge.textContent = product.badge || 'Popular in Patna';
    elements.modalTitle.textContent = product.title;
    elements.modalPriceCurrent.textContent = formatCurrency(product.startingPrice) + '*';
    
    if (product.originalPrice) {
      elements.modalPriceOriginal.textContent = formatCurrency(product.originalPrice);
      elements.modalPriceOriginal.style.display = 'inline';
    } else {
      elements.modalPriceOriginal.style.display = 'none';
    }

    elements.modalDesc.textContent = product.detailedDescription;

    // Inclusions
    if (elements.modalInclusionsList && product.inclusions) {
      elements.modalInclusionsList.innerHTML = product.inclusions.map(inc => `
        <li><span class="check">✓</span> <span>${inc}</span></li>
      `).join('');
    }

    // Customisation & setup notes
    if (elements.modalCustomisation) {
      elements.modalCustomisation.textContent = product.customisation;
    }
    if (elements.modalSetupTime) {
      elements.modalSetupTime.textContent = product.setupTime;
    }

    // Set Action URLs
    const waUrl = getProductWhatsAppUrl(product);
    elements.modalWhatsappBtn.href = waUrl;
    elements.modalCallBtn.href = `tel:${BUSINESS_CONFIG.phoneRaw}`;

    // Open Modal
    elements.productModal.classList.add('open');
    elements.productModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  /**
   * Close Product Detail Modal
   */
  function closeProductModal() {
    if (!elements.productModal) return;
    elements.productModal.classList.remove('open');
    elements.productModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.currentModalProduct = null;
  }

  /**
   * Reset All Filters
   */
  function resetAllFilters() {
    state.selectedCategory = 'all';
    state.selectedBudget = 'all';
    state.searchQuery = '';
    state.sortBy = 'popularity';

    if (elements.headerSearchInput) elements.headerSearchInput.value = '';
    if (elements.catalogueSearchInput) elements.catalogueSearchInput.value = '';
    if (elements.sortSelect) elements.sortSelect.value = 'popularity';

    updateActiveCategoryVisuals('all');
    updateActiveBudgetVisuals('all');

    renderProducts();
  }

  /**
   * Update Visual Category Highlights
   */
  function updateActiveCategoryVisuals(catId) {
    // 1. Filter chips
    const chips = elements.categoryChipsContainer.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
      if (chip.getAttribute('data-cat') === catId) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });

    // 2. Visual Occasion Cards
    elements.occasionsNavCards.forEach(card => {
      if (card.getAttribute('data-cat') === catId) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // 3. Subnav links
    elements.subnavLinks.forEach(link => {
      if (link.getAttribute('data-cat') === catId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /**
   * Update Visual Budget Chips
   */
  function updateActiveBudgetVisuals(budgetId) {
    elements.budgetChips.forEach(chip => {
      if (chip.getAttribute('data-budget') === budgetId) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }

  /**
   * Category Filter Click Handler
   */
  function setCategory(catId, scrollIntoView = true) {
    state.selectedCategory = catId;
    updateActiveCategoryVisuals(catId);
    renderProducts();

    if (scrollIntoView) {
      const catalogueSection = document.getElementById('catalogue');
      if (catalogueSection) {
        catalogueSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  /**
   * Budget Filter Click Handler
   */
  function setBudget(budgetId) {
    state.selectedBudget = budgetId;
    updateActiveBudgetVisuals(budgetId);
    renderProducts();
  }

  /**
   * Setup Category Filter Chips HTML
   */
  function initCategoryChips() {
    if (!elements.categoryChipsContainer) return;

    elements.categoryChipsContainer.innerHTML = OCCASIONS.map(occ => {
      const count = occ.id === 'all' 
        ? PRODUCTS_DATA.length 
        : PRODUCTS_DATA.filter(p => {
            const catMap = {
              'birthday': 'Birthday',
              'anniversary': 'Anniversary',
              'room-decoration': 'Room Decoration',
              'baby-welcome': 'Baby Welcome',
              'baby-shower': 'Baby Shower',
              'balloon-arches': 'Balloon Arches'
            };
            return p.category.toLowerCase() === (catMap[occ.id] || occ.id).toLowerCase();
          }).length;

      return `
        <button type="button" class="filter-chip ${occ.id === 'all' ? 'active' : ''}" data-cat="${occ.id}">
          <span>${occ.name}</span>
          <span class="filter-chip-count">${count}</span>
        </button>
      `;
    }).join('');

    elements.categoryChipsContainer.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const cat = chip.getAttribute('data-cat');
        setCategory(cat, false);
      });
    });
  }

  /**
   * Setup Occasion Navigation Cards
   */
  function initOccasionNav() {
    elements.occasionsNavCards.forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = card.getAttribute('data-cat');
        setCategory(cat, true);
      });
    });

    elements.subnavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.getAttribute('data-cat');
        setCategory(cat, true);
      });
    });
  }

  /**
   * Setup Budget Filter Chips
   */
  function initBudgetFilters() {
    elements.budgetChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const budget = chip.getAttribute('data-budget');
        setBudget(budget);
      });
    });
  }

  /**
   * Setup Live Search Inputs (Header and Catalogue in sync)
   */
  function initSearch() {
    const handleSearch = (val) => {
      state.searchQuery = val;
      if (elements.headerSearchInput && elements.headerSearchInput.value !== val) {
        elements.headerSearchInput.value = val;
      }
      if (elements.catalogueSearchInput && elements.catalogueSearchInput.value !== val) {
        elements.catalogueSearchInput.value = val;
      }
      renderProducts();
    };

    if (elements.headerSearchInput) {
      elements.headerSearchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
        if (e.target.value.trim() !== '') {
          const catalogue = document.getElementById('catalogue');
          if (catalogue) catalogue.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    if (elements.catalogueSearchInput) {
      elements.catalogueSearchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
      });
    }

    if (elements.sortSelect) {
      elements.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
      });
    }

    if (elements.resetFiltersBtn) {
      elements.resetFiltersBtn.addEventListener('click', resetAllFilters);
    }
  }

  /**
   * Enquiry Form Submission: WhatsApp Flow
   */
  function initEnquiryForm() {
    if (!elements.enquiryForm) return;

    // Set minimum date to today
    const dateInput = document.getElementById('eventDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }

    elements.enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('customerName').value.trim();
      const phone = document.getElementById('customerPhone').value.trim();
      const eventDate = document.getElementById('eventDate').value;
      const timeSlot = document.getElementById('eventTimeSlot').value;
      const occasion = document.getElementById('eventOccasion').value;
      const locationArea = document.getElementById('eventLocationArea').value;
      const addressDetails = document.getElementById('eventAddressDetails').value.trim();
      const budget = document.getElementById('eventBudget').value;
      const message = document.getElementById('eventMessage').value.trim();

      if (!name || !phone || !eventDate || !occasion || !locationArea) {
        alert('Please fill in all required fields (Name, Phone, Date, Occasion, and Area in Patna).');
        return;
      }

      // Build formatted WhatsApp Message
      let formattedMsg = `*NEW BALLOON DECORATION ENQUIRY (PATNA)*\n`;
      formattedMsg += `━━━━━━━━━━━━━━━━━━━━━\n`;
      formattedMsg += `👤 *Name:* ${name}\n`;
      formattedMsg += `📞 *Phone:* ${phone}\n`;
      formattedMsg += `📅 *Event Date:* ${eventDate}\n`;
      if (timeSlot) formattedMsg += `⏰ *Preferred Time:* ${timeSlot}\n`;
      formattedMsg += `🎉 *Occasion:* ${occasion}\n`;
      formattedMsg += `📍 *Patna Area:* ${locationArea}\n`;
      if (addressDetails) formattedMsg += `🏠 *Address / Venue:* ${addressDetails}\n`;
      if (budget) formattedMsg += `💰 *Budget:* ${budget}\n`;
      if (message) formattedMsg += `📝 *Special Requests:* ${message}\n`;
      formattedMsg += `━━━━━━━━━━━━━━━━━━━━━\n`;
      formattedMsg += `Please share availability, design options, and best quotation. Thank you!`;

      const waUrl = `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`;

      // Show toast
      showToast('Opening WhatsApp with your booking details...');

      // Copy text as fallback
      if (navigator.clipboard) {
        navigator.clipboard.writeText(formattedMsg).catch(() => {});
      }

      // Open WhatsApp in new tab
      window.open(waUrl, '_blank');
    });
  }

  /**
   * FAQs Accordion Setup
   */
  function initFaqs() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close other items
        faqItems.forEach(other => {
          if (other !== item) other.classList.remove('open');
        });
        if (isOpen) {
          item.classList.remove('open');
        } else {
          item.classList.add('open');
        }
      });
    });
  }

  /**
   * Gallery Lightbox Setup
   */
  function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (!img || !elements.lightboxBackdrop || !elements.lightboxImage) return;

        elements.lightboxImage.src = img.src;
        elements.lightboxImage.alt = img.alt || 'Balloon Decoration in Patna';
        elements.lightboxBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    if (elements.lightboxCloseBtn && elements.lightboxBackdrop) {
      elements.lightboxCloseBtn.addEventListener('click', closeLightbox);
      elements.lightboxBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.lightboxBackdrop) closeLightbox();
      });
    }

    function closeLightbox() {
      if (!elements.lightboxBackdrop) return;
      elements.lightboxBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /**
   * Mobile Drawer Setup
   */
  function initMobileDrawer() {
    if (!elements.mobileNavToggle || !elements.mobileDrawerBackdrop) return;

    elements.mobileNavToggle.addEventListener('click', () => {
      elements.mobileDrawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
      elements.mobileDrawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (elements.drawerCloseBtn) elements.drawerCloseBtn.addEventListener('click', closeDrawer);
    elements.mobileDrawerBackdrop.addEventListener('click', (e) => {
      if (e.target === elements.mobileDrawerBackdrop) closeDrawer();
    });

    // Close on navigation link click
    elements.mobileDrawerBackdrop.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  }

  /**
   * Modal Event Handlers
   */
  function initModal() {
    if (!elements.modalCloseBtn || !elements.productModal) return;

    elements.modalCloseBtn.addEventListener('click', closeProductModal);

    elements.productModal.addEventListener('click', (e) => {
      if (e.target === elements.productModal) {
        closeProductModal();
      }
    });

    // Escape key closes modal & lightbox
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeProductModal();
        if (elements.lightboxBackdrop) elements.lightboxBackdrop.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /**
   * Scroll to Top Button
   */
  function initScrollToTop() {
    if (!elements.btnScrollTop) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        elements.btnScrollTop.classList.add('visible');
      } else {
        elements.btnScrollTop.classList.remove('visible');
      }
    }, { passive: true });

    elements.btnScrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /**
   * App Initializer
   */
  function init() {
    initCategoryChips();
    initOccasionNav();
    initBudgetFilters();
    initSearch();
    renderProducts();
    initEnquiryForm();
    initFaqs();
    initGalleryLightbox();
    initMobileDrawer();
    initModal();
    initScrollToTop();

    console.log('Balloon Decoration Patna initialized with +91 91358 23576');
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();


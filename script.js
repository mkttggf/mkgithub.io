// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});

// Rules tabs functionality
function showRules(ruleType) {
    // Hide all rule contents
    const ruleContents = document.querySelectorAll('.rules-content');
    ruleContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected rule content
    const selectedContent = document.getElementById(ruleType + '-rules');
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Job application modal
function openJobModal(jobType) {
    const modal = document.getElementById('jobModal');
    const modalTitle = document.getElementById('modalTitle');
    
    // Set modal title based on job type
    const jobTitles = {
        'lspd': 'تقديم LSPD',
        'ems': 'تقديم EMS',
        'admin': 'تقديم الادارة',
        'mechanic': 'تقديم الميكانيك'
    };
    
    modalTitle.textContent = jobTitles[jobType] || 'تقديم على وظيفة';
    
    // Show modal
    modal.style.display = 'block';
    
    // Store job type for form submission
    modal.dataset.jobType = jobType;
}

function closeJobModal() {
    const modal = document.getElementById('jobModal');
    modal.style.display = 'none';
    
    // Reset form
    const form = document.getElementById('jobForm');
    if (form) {
        form.reset();
    }
}

// Store modal
function openStoreModal(itemType) {
    const modal = document.getElementById('storeModal');
    const modalTitle = document.getElementById('storeModalTitle');
    const modalContent = document.getElementById('storeModalContent');
    
    // Set modal content based on item type
    const itemDetails = {
        'vip': {
            title: 'شراء باقة VIP',
            price: '$10',
            content: `
                <h3>باقة VIP - $10</h3>
                <ul>
                    <li>مميزات حصرية</li>
                    <li>أولوية في الدخول</li>
                    <li>ألوان خاصة في الشات</li>
                    <li>مكافآت إضافية</li>
                </ul>
                <form id="storeForm">
                    <div class="form-group">
                        <label for="playerName">اسم اللاعب:</label>
                        <input type="text" id="playerName" name="playerName" required>
                    </div>
                    <div class="form-group">
                        <label for="steamId">Steam ID:</label>
                        <input type="text" id="steamId" name="steamId" required>
                    </div>
                    <div class="form-group">
                        <label for="discordId">Discord ID:</label>
                        <input type="text" id="discordId" name="discordId" required>
                    </div>
                    <div class="form-group">
                        <label for="paymentMethod">طريقة الدفع:</label>
                        <select id="paymentMethod" name="paymentMethod" required>
                            <option value="">اختر طريقة الدفع</option>
                            <option value="paypal">PayPal</option>
                            <option value="stripe">Stripe</option>
                            <option value="crypto">Cryptocurrency</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="notes">ملاحظات:</label>
                        <textarea id="notes" name="notes" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn-primary">إرسال الطلب</button>
                </form>
            `
        },
        'cars': {
            title: 'شراء باقة السيارات',
            price: '$15',
            content: `
                <h3>باقة السيارات - $15</h3>
                <ul>
                    <li>سيارات حصرية</li>
                    <li>ألوان مخصصة</li>
                    <li>تعديلات خاصة</li>
                    <li>أولوية في الطلبات</li>
                </ul>
                <form id="storeForm">
                    <div class="form-group">
                        <label for="playerName">اسم اللاعب:</label>
                        <input type="text" id="playerName" name="playerName" required>
                    </div>
                    <div class="form-group">
                        <label for="steamId">Steam ID:</label>
                        <input type="text" id="steamId" name="steamId" required>
                    </div>
                    <div class="form-group">
                        <label for="discordId">Discord ID:</label>
                        <input type="text" id="discordId" name="discordId" required>
                    </div>
                    <div class="form-group">
                        <label for="paymentMethod">طريقة الدفع:</label>
                        <select id="paymentMethod" name="paymentMethod" required>
                            <option value="">اختر طريقة الدفع</option>
                            <option value="paypal">PayPal</option>
                            <option value="stripe">Stripe</option>
                            <option value="crypto">Cryptocurrency</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="notes">ملاحظات:</label>
                        <textarea id="notes" name="notes" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn-primary">إرسال الطلب</button>
                </form>
            `
        },
        'weapons': {
            title: 'شراء باقة الأسلحة',
            price: '$20',
            content: `
                <h3>باقة الأسلحة - $20</h3>
                <ul>
                    <li>أسلحة متقدمة</li>
                    <li>ذخيرة إضافية</li>
                    <li>أولوية في الشراء</li>
                    <li>خصومات خاصة</li>
                </ul>
                <form id="storeForm">
                    <div class="form-group">
                        <label for="playerName">اسم اللاعب:</label>
                        <input type="text" id="playerName" name="playerName" required>
                    </div>
                    <div class="form-group">
                        <label for="steamId">Steam ID:</label>
                        <input type="text" id="steamId" name="steamId" required>
                    </div>
                    <div class="form-group">
                        <label for="discordId">Discord ID:</label>
                        <input type="text" id="discordId" name="discordId" required>
                    </div>
                    <div class="form-group">
                        <label for="paymentMethod">طريقة الدفع:</label>
                        <select id="paymentMethod" name="paymentMethod" required>
                            <option value="">اختر طريقة الدفع</option>
                            <option value="paypal">PayPal</option>
                            <option value="stripe">Stripe</option>
                            <option value="crypto">Cryptocurrency</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="notes">ملاحظات:</label>
                        <textarea id="notes" name="notes" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn-primary">إرسال الطلب</button>
                </form>
            `
        }
    };
    
    const item = itemDetails[itemType] || {
        title: 'شراء من المتجر',
        price: '$0',
        content: '<p>سيتم إضافة نظام الدفع قريباً</p>'
    };
    
    modalTitle.textContent = item.title;
    modalContent.innerHTML = item.content;
    
    // Store item type for form submission
    modal.dataset.itemType = itemType;
    modal.dataset.itemPrice = item.price;
    
    // Add form submission handler
    const storeForm = document.getElementById('storeForm');
    if (storeForm) {
        storeForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(storeForm);
            const orderData = {
                productName: item.title,
                price: item.price,
                playerName: formData.get('playerName'),
                steamId: formData.get('steamId'),
                discordId: formData.get('discordId'),
                paymentMethod: formData.get('paymentMethod'),
                notes: formData.get('notes'),
                timestamp: new Date().toISOString()
            };
            
            try {
                const success = await sendStoreOrderToDiscord(orderData);
                
                if (success) {
                    alert('تم إرسال طلب الشراء بنجاح! سنتواصل معك قريباً.');
                    closeStoreModal();
                } else {
                    alert('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.');
                }
            } catch (error) {
                console.error('Error submitting store order:', error);
                alert('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.');
            }
        });
    }
    
    // Show modal
    modal.style.display = 'block';
}

function closeStoreModal() {
    const modal = document.getElementById('storeModal');
    modal.style.display = 'none';
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const jobModal = document.getElementById('jobModal');
    const storeModal = document.getElementById('storeModal');
    
    if (event.target === jobModal) {
        closeJobModal();
    }
    
    if (event.target === storeModal) {
        closeStoreModal();
    }
});

// Form submission
document.addEventListener('DOMContentLoaded', function() {
    const jobForm = document.getElementById('jobForm');
    
    if (jobForm) {
        jobForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(jobForm);
            const jobType = document.getElementById('jobModal').dataset.jobType;
            
            // Create application object
            const application = {
                jobType: jobType,
                jobTitle: getJobTitle(jobType),
                playerName: formData.get('name'),
                steamId: formData.get('steam'),
                discordId: formData.get('discord'),
                age: parseInt(formData.get('age') || '18'),
                playTime: parseInt(formData.get('time') || '0'),
                level: parseInt(formData.get('level') || '1'),
                experience: formData.get('experience') || '',
                reason: formData.get('reason') || '',
                timestamp: new Date().toISOString()
            };
            
            // Check job requirements
            const requirements = checkJobRequirements(jobType, application);
            
            if (!requirements.eligible) {
                alert(`عذراً، أنت غير مؤهل لهذه الوظيفة: ${requirements.reason}`);
                return;
            }
            
            try {
                // Send to Discord via webhook
                const success = await sendApplicationToDiscord(application);
                
                if (success) {
                    // Store in localStorage as backup
                    const applications = JSON.parse(localStorage.getItem('jobApplications') || '[]');
                    applications.push({
                        ...application,
                        status: 'sent'
                    });
                    localStorage.setItem('jobApplications', JSON.stringify(applications));
                    
                    alert('تم إرسال طلب التقديم بنجاح! سنتواصل معك قريباً.');
                } else {
                    alert('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.');
                }
            } catch (error) {
                console.error('Error submitting application:', error);
                alert('حدث خطأ في إرسال الطلب. يرجى المحاولة مرة أخرى.');
            }
            
            // Close modal and reset form
            closeJobModal();
        });
    }
});

// Helper function to get job title
function getJobTitle(jobType) {
    const jobTitles = {
        'lspd': 'تقديم الشرطة',
        'ems': 'تقديم الإسعاف',
        'admin': 'تقديم الإدارة',
        'mechanic': 'تقديم الميكانيك'
    };
    return jobTitles[jobType] || 'تقديم على وظيفة';
}

// Connect to server function
function connectServer() {
    // In a real application, this would connect to the FiveM server
    alert('سيتم إضافة رابط السيرفر قريباً');
}

// Join Discord function
function joinDiscord() {
    // Get Discord invite link from config
    const discordLink = getDiscordInviteLink();
    if (discordLink && discordLink !== "https://discord.gg/your-server-invite") {
        window.open(discordLink, '_blank');
    } else {
        alert('سيتم إضافة رابط الدسكورد قريباً');
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(1, 167, 98, 0.53)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #00ff95af, #000000)';
        navbar.style.backdropFilter = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.job-card, .store-item, .explanation-card, .rule-category');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const text = statNumber.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            
            if (number && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                animateCounter(statNumber, number);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        statsObserver.observe(item);
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Set initial body opacity
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Add some interactive effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add ripple effect to buttons
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

    // Add ripple effect CSS
    const style = document.createElement('style');
    style.textContent = `
        .btn-primary, .btn-secondary {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(0, 255, 149, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

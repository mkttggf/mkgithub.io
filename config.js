// ملف الإعدادات - Project CFW
// يمكنك تعديل هذه الإعدادات حسب احتياجاتك

const CONFIG = {
    // إعدادات الدسكورد
    discord: {
        // رابط الدسكورد الرئيسي
        inviteLink: "https://discord.gg/BTQJwFPV",
        
        // معرفات الرومات
        channels: {
            // روم التقديم على الوظائف
            jobApplications: "https://discordapp.com/api/webhooks/1410554747559215186/kYQn_J79f68-L17APS03KOnp81MllIv9WIIzUbynxjQ9SoELMiMuT2mW2F-fPZRzd9sB",
            
            // روم طلبات المتجر
            storeOrders: "https://discordapp.com/api/webhooks/1410554747559215186/kYQn_J79f68-L17APS03KOnp81MllIv9WIIzUbynxjQ9SoELMiMuT2mW2F-fPZRzd9sB",
            
            // روم الشكاوى والاقتراحات
            support: "https://discordapp.com/api/webhooks/1410554747559215186/kYQn_J79f68-L17APS03KOnp81MllIv9WIIzUbynxjQ9SoELMiMuT2mW2F-fPZRzd9sB",
            
            // روم الإعلانات
            announcements: "https://discordapp.com/api/webhooks/1410554747559215186/kYQn_J79f68-L17APS03KOnp81MllIv9WIIzUbynxjQ9SoELMiMuT2mW2F-fPZRzd9sB",
            
            // روم الترحيب
            welcome: "https://discordapp.com/api/webhooks/1410554747559215186/kYQn_J79f68-L17APS03KOnp81MllIv9WIIzUbynxjQ9SoELMiMuT2mW2F-fPZRzd9sB"
        },
        
        // معرف البوت (إذا كان لديك بوت)
        botToken: "YOUR_BOT_TOKEN_HERE",
        
        // معرف السيرفر
        guildId: "1287681077036716085"
    },
    
    // إعدادات نظام التقديم
    applications: {
        // تفعيل نظام التقديم
        enabled: true,
        
        // إعدادات الوظائف
        jobs: {
            // تفعيل التقديم على وظيفة الشرطة
            police: {
                enabled: true,
                channelId: "1384342468274950274",
                roleId: "1384342468274950274", // رتبة المرشح
                requirements: {
                    age: 1,
                    playTime: 1, // ساعات اللعب المطلوبة
                    // level: 10 // المستوى المطلوب
                }
            },
            
            // تفعيل التقديم على وظيفة الإسعاف
            ems: {
                enabled: true,
                channelId: "1384342468274950274",
                roleId: "1384342468274950274",
                requirements: {
                    age: 18,
                    playTime: 20,
                    // level: 8
                }
            },
            
            // تفعيل التقديم على وظيفة الإدارة
            admin: {
                enabled: true,
                channelId: "1384342468274950274",
                roleId: "1384342468274950274",
                requirements: {
                    age: 18,
                    playTime: 20,
                    // level: 20
                }
            },
            
            // تفعيل التقديم على وظيفة الميكانيكي
            mechanic: {
                enabled: true,
                channelId: "1384342468274950274",
                roleId: "1384342468274950274",
                requirements: {
                    age: 16,
                    playTime: 30,
                    // level: 5
                }
            }
        }
    },
    
    // إعدادات المتجر
    store: {
        // تفعيل نظام المتجر
        enabled: true,
        
        // روم طلبات المتجر
        ordersChannel: "1384342468274950274",
        
        // إعدادات الدفع
        payment: {
            // تفعيل نظام الدفع
            enabled: true,
            
            // طرق الدفع المتاحة
            methods: ["paypal", "stripe", "crypto"],
            
            // العملة
            currency: "USD"
        }
    },
    
    // إعدادات السيرفر
    server: {
        // اسم السيرفر
        name: "Project CFW",
        
        // رابط السيرفر
        connectUrl: "connect://your-server-ip:port",
        
        // معلومات السيرفر
        info: {
            maxPlayers: 128,
            uptime: "99.9%",
            version: "1.0.0"
        }
    },
    
    // إعدادات الموقع
    website: {
        // عنوان الموقع
        title: "Project CFW - سيرفر فايف إم",
        
        // وصف الموقع
        description: "أفضل سيرفر فايف إم عربي",
        
        // الكلمات المفتاحية
        keywords: "فايف إم, سيرفر, عربي, roleplay",
        
        // رابط الموقع
        url: "https://your-website.com"
    }
};

// دالة لإرسال التقديم إلى الدسكورد
async function sendApplicationToDiscord(applicationData) {
    try {
        // في التطبيق الحقيقي، ستقوم بإرسال البيانات إلى خادمك
        // الذي سيقوم بإرسالها إلى الدسكورد عبر webhook
        
        const webhookUrl = `https://discordapp.com/api/webhooks/1410554747559215186/kYQn_J79f68-L17APS03KOnp81MllIv9WIIzUbynxjQ9SoELMiMuT2mW2F-fPZRzd9sB`;
        
        const embed = {
            title: `تقديم جديد - ${applicationData.jobTitle}`,
            color: 0xFF6B35,
            fields: [
                {
                    name: "اسم اللاعب",
                    value: applicationData.playerName,
                    inline: true
                },
                {
                    name: "Steam ID",
                    value: applicationData.steamId,
                    inline: true
                },
                {
                    name: "Discord ID",
                    value: applicationData.discordId,
                    inline: true
                },
                {
                    name: "العمر",
                    value: applicationData.age.toString(),
                    inline: true
                },
                {
                    name: "ساعات اللعب",
                    value: applicationData.playTime.toString(),
                    inline: true
                },
                {
                    name: "المستوى",
                    value: applicationData.level.toString(),
                    inline: true
                },
                {
                    name: "الخبرة",
                    value: applicationData.experience,
                    inline: false
                },
                {
                    name: "سبب التقديم",
                    value: applicationData.reason,
                    inline: false
                }
            ],
            timestamp: new Date().toISOString(),
            footer: {
                text: "Project CFW - نظام التقديم"
            }
        };
        
        const payload = {
            embeds: [embed]
        };
        
        // إرسال البيانات إلى webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        
        if (response.ok) {
            console.log('تم إرسال التقديم بنجاح');
            return true;
        } else {
            console.error('فشل في إرسال التقديم');
            return false;
        }
        
    } catch (error) {
        console.error('خطأ في إرسال التقديم:', error);
        return false;
    }
}

// دالة لإرسال طلب المتجر إلى الدسكورد
async function sendStoreOrderToDiscord(orderData) {
    try {
        const webhookUrl = `https://discordapp.com/api/webhooks/1410554747559215186/kYQn_J79f68-L17APS03KOnp81MllIv9WIIzUbynxjQ9SoELMiMuT2mW2F-fPZRzd9sB`;
        
        const embed = {
            title: `طلب جديد من المتجر`,
            color: 0x28A745,
            fields: [
                {
                    name: "اسم اللاعب",
                    value: orderData.playerName,
                    inline: true
                },
                {
                    name: "Steam ID",
                    value: orderData.steamId,
                    inline: true
                },
                {
                    name: "Discord ID",
                    value: orderData.discordId,
                    inline: true
                },
                {
                    name: "المنتج",
                    value: orderData.productName,
                    inline: true
                },
                {
                    name: "السعر",
                    value: orderData.price,
                    inline: true
                },
                {
                    name: "طريقة الدفع",
                    value: orderData.paymentMethod,
                    inline: true
                },
                {
                    name: "ملاحظات",
                    value: orderData.notes || "لا توجد ملاحظات",
                    inline: false
                }
            ],
            timestamp: new Date().toISOString(),
            footer: {
                text: "Project CFW - نظام المتجر"
            }
        };
        
        const payload = {
            embeds: [embed]
        };
        
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        
        if (response.ok) {
            console.log('تم إرسال الطلب بنجاح');
            return true;
        } else {
            console.error('فشل في إرسال الطلب');
            return false;
        }
        
    } catch (error) {
        console.error('خطأ في إرسال الطلب:', error);
        return false;
    }
}

// دالة للتحقق من متطلبات الوظيفة
function checkJobRequirements(jobType, playerData) {
    const job = CONFIG.applications.jobs[jobType];
    
    if (!job || !job.enabled) {
        return {
            eligible: false,
            reason: "هذه الوظيفة غير متاحة حالياً"
        };
    }
    
    const requirements = job.requirements;
    
    if (playerData.age < requirements.age) {
        return {
            eligible: false,
            reason: `العمر المطلوب: ${requirements.age} سنة`
        };
    }
    
    if (playerData.playTime < requirements.playTime) {
        return {
            eligible: false,
            reason: `ساعات اللعب المطلوبة: ${requirements.playTime} ساعة`
        };
    }
    
    if (playerData.level < requirements.level) {
        return {
            eligible: false,
            reason: `المستوى المطلوب: ${requirements.level}`
        };
    }
    
    return {
        eligible: true,
        reason: "مؤهل للتقديم"
    };
}

// دالة للحصول على رابط الدسكورد
function getDiscordInviteLink() {
    return CONFIG.discord.inviteLink;
}

// دالة للحصول على معلومات السيرفر
function getServerInfo() {
    return CONFIG.server;
}

// دالة للحصول على معلومات الموقع
function getWebsiteInfo() {
    return CONFIG.website;
}

// تصدير الإعدادات والدوال
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONFIG,
        sendApplicationToDiscord,
        sendStoreOrderToDiscord,
        checkJobRequirements,
        getDiscordInviteLink,
        getServerInfo,
        getWebsiteInfo
    };
}

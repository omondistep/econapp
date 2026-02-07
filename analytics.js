// Analytics and Personalization
class AnalyticsManager {
    constructor() {
        this.stats = {
            lessonsViewed: JSON.parse(localStorage.getItem('lessonsViewed') || '{}'),
            pdfsOpened: JSON.parse(localStorage.getItem('pdfsOpened') || '{}'),
            timeSpent: parseInt(localStorage.getItem('timeSpent') || '0'),
            bookmarks: JSON.parse(localStorage.getItem('pdfBookmarks') || '{}'),
            searchHistory: JSON.parse(localStorage.getItem('searchHistory') || '[]'),
            sessionStart: Date.now()
        };
        
        this.init();
    }

    init() {
        this.updateStatsDisplay();
        this.startSessionTimer();
        this.setupVisibilityListener();
    }

    trackLessonView(lessonId) {
        const count = this.stats.lessonsViewed[lessonId] || 0;
        this.stats.lessonsViewed[lessonId] = count + 1;
        this.saveStats();
        this.updateStatsDisplay();
    }

    trackPDFOpen(pdfFilename) {
        const count = this.stats.pdfsOpened[pdfFilename] || 0;
        this.stats.pdfsOpened[pdfFilename] = count + 1;
        this.saveStats();
    }

    trackSearch(query) {
        if (query.trim()) {
            this.stats.searchHistory.unshift({
                query: query,
                timestamp: new Date().toISOString()
            });
            // Keep only last 20 searches
            this.stats.searchHistory = this.stats.searchHistory.slice(0, 20);
            this.saveStats();
        }
    }

    addBookmark(pdfFilename, page, note = '') {
        const key = `${pdfFilename}-${page}`;
        this.stats.bookmarks[key] = {
            pdf: pdfFilename,
            page: page,
            date: new Date().toISOString(),
            note: note
        };
        this.saveStats();
        this.updateStatsDisplay();
    }

    removeBookmark(pdfFilename, page) {
        const key = `${pdfFilename}-${page}`;
        delete this.stats.bookmarks[key];
        this.saveStats();
        this.updateStatsDisplay();
    }

    getBookmarks() {
        return Object.values(this.stats.bookmarks);
    }

    startSessionTimer() {
        this.sessionTimer = setInterval(() => {
            this.stats.timeSpent += 1; // Add 1 minute
            this.saveStats();
            this.updateStatsDisplay();
        }, 60000); // Update every minute
    }

    stopSessionTimer() {
        if (this.sessionTimer) {
            clearInterval(this.sessionTimer);
        }
    }

    setupVisibilityListener() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopSessionTimer();
            } else {
                this.startSessionTimer();
            }
        });
    }

    getRecommendations() {
        // Get most viewed lessons
        const viewedLessons = Object.entries(this.stats.lessonsViewed)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([id]) => parseInt(id));

        // Get recommendations based on viewed lessons
        const recommendations = new Set();
        
        viewedLessons.forEach(lessonId => {
            const lesson = economicsLessons.find(l => l.id === lessonId);
            if (lesson) {
                // Find lessons in same category
                const sameCategory = economicsLessons.filter(l => 
                    l.id !== lessonId && 
                    l.category === lesson.category
                ).slice(0, 2);
                
                sameCategory.forEach(l => recommendations.add(l.id));
                
                // Find lessons with similar concepts
                const mainConcept = lesson.concept.split(' ')[0];
                const similarConcepts = economicsLessons.filter(l =>
                    l.id !== lessonId &&
                    l.concept.includes(mainConcept) &&
                    !recommendations.has(l.id)
                ).slice(0, 2);
                
                similarConcepts.forEach(l => recommendations.add(l.id));
            }
        });

        // Convert to lesson objects
        return Array.from(recommendations)
            .map(id => economicsLessons.find(l => l.id === id))
            .filter(Boolean)
            .slice(0, 5);
    }

    updateStatsDisplay() {
        const lessonsViewed = Object.keys(this.stats.lessonsViewed).length;
        const timeSpent = Math.floor(this.stats.timeSpent);
        const bookmarksCount = Object.keys(this.stats.bookmarks).length;

        document.getElementById('lessonsViewed').textContent = lessonsViewed;
        document.getElementById('timeSpent').textContent = timeSpent;
        document.getElementById('bookmarksCount').textContent = bookmarksCount;
    }

    saveStats() {
        localStorage.setItem('lessonsViewed', JSON.stringify(this.stats.lessonsViewed));
        localStorage.setItem('pdfsOpened', JSON.stringify(this.stats.pdfsOpened));
        localStorage.setItem('timeSpent', this.stats.timeSpent.toString());
        localStorage.setItem('pdfBookmarks', JSON.stringify(this.stats.bookmarks));
        localStorage.setItem('searchHistory', JSON.stringify(this.stats.searchHistory));
    }
}

// Initialize analytics
let analytics;
document.addEventListener('DOMContentLoaded', () => {
    analytics = new AnalyticsManager();
});

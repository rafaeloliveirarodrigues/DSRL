// DSRL Assessment Application
class DSRLAssessment {
    constructor() {
        this.data = {
            "domains": [
                {
                    "id": "eirl",
                    "name": "Environmental Impact & Resource Efficiency",
                    "abbreviation": "EIRL",
                    "description": "Assessment of environmental footprint reduction, resource optimization, and circular economy implementation through digital solutions",
                    "color": "#2E7D32",
                    "questions": [
                        {
                            "question": "How does your organization currently measure its digital carbon footprint?",
                            "options": [
                                {"text": "No measurement in place", "level": 1},
                                {"text": "Basic awareness of digital emissions", "level": 2},
                                {"text": "Initial measurement tools implemented", "level": 3},
                                {"text": "Comprehensive measurement with reduction targets", "level": 5},
                                {"text": "Real-time monitoring with continuous optimization", "level": 8}
                            ]
                        },
                        {
                            "question": "To what extent are circular economy principles integrated into your digital operations?",
                            "options": [
                                {"text": "No circular economy integration", "level": 1},
                                {"text": "Basic awareness of circular principles", "level": 2},
                                {"text": "Initial circular economy initiatives", "level": 4},
                                {"text": "Systematic circular economy implementation", "level": 7},
                                {"text": "Industry-leading circular economy integration", "level": 9}
                            ]
                        },
                        {
                            "question": "How advanced is your resource efficiency optimization through digital technologies?",
                            "options": [
                                {"text": "Manual processes with no optimization", "level": 1},
                                {"text": "Basic digital tools for efficiency", "level": 3},
                                {"text": "Pilot projects for resource optimization", "level": 5},
                                {"text": "Scaled resource optimization workflows", "level": 6},
                                {"text": "AI-driven autonomous resource optimization", "level": 9}
                            ]
                        }
                    ]
                },
                {
                    "id": "disrl",
                    "name": "Digital Infrastructure Sustainability",
                    "abbreviation": "DISRL",
                    "description": "Evaluation of green IT infrastructure, energy efficiency, sustainable cloud adoption, and eco-friendly technology deployment",
                    "color": "#1976D2",
                    "questions": [
                        {
                            "question": "What is the current state of your organization's green IT infrastructure?",
                            "options": [
                                {"text": "Legacy systems with no green considerations", "level": 1},
                                {"text": "Basic energy-saving measures implemented", "level": 2},
                                {"text": "Assessment of data center energy consumption completed", "level": 3},
                                {"text": "Green IT targets integrated into infrastructure planning", "level": 4},
                                {"text": "Zero-carbon digital infrastructure achieved", "level": 9}
                            ]
                        },
                        {
                            "question": "How extensively does your organization use renewable energy for digital operations?",
                            "options": [
                                {"text": "No renewable energy integration", "level": 1},
                                {"text": "Basic renewable energy awareness", "level": 2},
                                {"text": "Pilot renewable energy projects", "level": 5},
                                {"text": "Organization-wide renewable energy adoption", "level": 6},
                                {"text": "100% renewable energy with excess contribution to grid", "level": 9}
                            ]
                        },
                        {
                            "question": "What level of automation exists for energy optimization in your digital infrastructure?",
                            "options": [
                                {"text": "No automation for energy optimization", "level": 1},
                                {"text": "Basic automated energy management", "level": 3},
                                {"text": "Integrated cloud efficiency platforms", "level": 7},
                                {"text": "Advanced AI-driven energy optimization", "level": 8},
                                {"text": "Autonomous, self-optimizing infrastructure", "level": 9}
                            ]
                        }
                    ]
                },
                {
                    "id": "dasrl",
                    "name": "Data & Analytics for Sustainability",
                    "abbreviation": "DASRL",
                    "description": "Measuring data-driven sustainability decision making, environmental monitoring, and predictive analytics for resource optimization",
                    "color": "#7B1FA2",
                    "questions": [
                        {
                            "question": "How comprehensive is your organization's sustainability data collection?",
                            "options": [
                                {"text": "No sustainability metrics collected", "level": 1},
                                {"text": "Basic sustainability reporting awareness", "level": 2},
                                {"text": "Initial environmental KPI data gathering", "level": 3},
                                {"text": "Comprehensive ESG analytics strategy", "level": 4},
                                {"text": "Autonomous, self-optimizing sustainability analytics", "level": 9}
                            ]
                        },
                        {
                            "question": "What level of predictive analytics does your organization use for sustainability?",
                            "options": [
                                {"text": "No predictive sustainability analytics", "level": 1},
                                {"text": "Basic trend analysis and reporting", "level": 3},
                                {"text": "Pilot sustainability dashboards", "level": 5},
                                {"text": "Predictive models for resource optimization", "level": 7},
                                {"text": "AI-driven autonomous sustainability decisioning", "level": 8}
                            ]
                        },
                        {
                            "question": "How real-time is your environmental monitoring and decision-making?",
                            "options": [
                                {"text": "Monthly or quarterly sustainability reports only", "level": 2},
                                {"text": "Weekly sustainability data updates", "level": 4},
                                {"text": "Daily sustainability monitoring dashboards", "level": 5},
                                {"text": "Real-time environmental monitoring systems", "level": 6},
                                {"text": "Instantaneous AI-driven sustainability optimization", "level": 9}
                            ]
                        }
                    ]
                },
                {
                    "id": "sbmirl",
                    "name": "Sustainable Business Model Innovation",
                    "abbreviation": "SBMIRL", 
                    "description": "Development of sustainable value propositions, revenue models that align with ESG goals, and digital-enabled sustainability services",
                    "color": "#F57C00",
                    "questions": [
                        {
                            "question": "How integrated is sustainability into your organization's value proposition?",
                            "options": [
                                {"text": "No sustainability in value proposition", "level": 1},
                                {"text": "Awareness of ESG market opportunities", "level": 2},
                                {"text": "Initial validation of sustainable offerings", "level": 3},
                                {"text": "Sustainability integrated into strategic planning", "level": 4},
                                {"text": "Transformative, sustainability-first business model", "level": 9}
                            ]
                        },
                        {
                            "question": "What digital services does your organization offer that specifically address sustainability?",
                            "options": [
                                {"text": "No digital sustainability services offered", "level": 1},
                                {"text": "Basic sustainability reporting services", "level": 3},
                                {"text": "Pilot digital sustainability service offerings", "level": 5},
                                {"text": "Scaled launch of green digital products", "level": 6},
                                {"text": "Comprehensive portfolio of sustainability-enabling digital services", "level": 8}
                            ]
                        },
                        {
                            "question": "How does your business model innovation process incorporate sustainability considerations?",
                            "options": [
                                {"text": "Traditional innovation with no ESG focus", "level": 1},
                                {"text": "Ad-hoc sustainability considerations in innovation", "level": 2},
                                {"text": "Systematic sustainability business processes", "level": 7},
                                {"text": "Continuous business model innovation for ESG", "level": 8},
                                {"text": "Disruptive sustainability-first business model innovation", "level": 9}
                            ]
                        }
                    ]
                },
                {
                    "id": "sesrl",
                    "name": "Stakeholder Engagement & Social Impact",
                    "abbreviation": "SESRL",
                    "description": "Stakeholder collaboration, social impact measurement, digital inclusion, and community engagement through digital platforms",
                    "color": "#D32F2F",
                    "questions": [
                        {
                            "question": "How comprehensive are your digital channels for stakeholder engagement?",
                            "options": [
                                {"text": "No digital channels for stakeholder input", "level": 1},
                                {"text": "Basic digital communication channels", "level": 2},
                                {"text": "Initial stakeholder surveys and feedback systems", "level": 3},
                                {"text": "Comprehensive digital engagement strategy", "level": 4},
                                {"text": "Industry benchmark in digital social engagement", "level": 9}
                            ]
                        },
                        {
                            "question": "What is your organization's capability for measuring social impact through digital platforms?",
                            "options": [
                                {"text": "No social impact measurement", "level": 1},
                                {"text": "Basic awareness of social impact measurement", "level": 2},
                                {"text": "Pilot community impact platforms", "level": 5},
                                {"text": "Integrated social value tracking systems", "level": 7},
                                {"text": "Real-time community impact analytics with AI", "level": 8}
                            ]
                        },
                        {
                            "question": "How advanced are your digital inclusion and accessibility initiatives?",
                            "options": [
                                {"text": "No specific digital inclusion initiatives", "level": 1},
                                {"text": "Basic accessibility compliance", "level": 3},
                                {"text": "Systematic digital inclusion programs", "level": 6},
                                {"text": "Advanced accessibility and inclusion features", "level": 7},
                                {"text": "Leading industry standards in digital inclusion", "level": 9}
                            ]
                        }
                    ]
                },
                {
                    "id": "gcrl",
                    "name": "Governance & Compliance",
                    "abbreviation": "GCRL",
                    "description": "Sustainability governance frameworks, regulatory compliance, risk management, and transparent reporting systems",
                    "color": "#5D4037",
                    "questions": [
                        {
                            "question": "How mature are your sustainability governance structures?",
                            "options": [
                                {"text": "No sustainability governance structures", "level": 1},
                                {"text": "Basic awareness of ESG regulations", "level": 2},
                                {"text": "Initial compliance gap assessment completed", "level": 3},
                                {"text": "Formal governance framework with ESG policies", "level": 4},
                                {"text": "Exemplar in transparent, best-practice governance", "level": 9}
                            ]
                        },
                        {
                            "question": "What is the level of automation in your ESG compliance monitoring?",
                            "options": [
                                {"text": "Manual compliance processes only", "level": 1},
                                {"text": "Basic digital compliance tracking", "level": 3},
                                {"text": "Pilot sustainability reporting processes", "level": 5},
                                {"text": "Integrated ESG risk management platform", "level": 7},
                                {"text": "Continuous, automated compliance monitoring", "level": 8}
                            ]
                        },
                        {
                            "question": "How transparent and comprehensive is your sustainability reporting?",
                            "options": [
                                {"text": "No formal sustainability reporting", "level": 1},
                                {"text": "Basic annual sustainability reports", "level": 3},
                                {"text": "Regular stakeholder sustainability communications", "level": 5},
                                {"text": "Real-time transparency dashboard for stakeholders", "level": 7},
                                {"text": "Industry-leading transparent reporting with third-party validation", "level": 9}
                            ]
                        }
                    ]
                },
                {
                    "id": "iceirl",
                    "name": "Innovation & Circular Economy Integration",
                    "abbreviation": "ICEIRL",
                    "description": "Innovation processes for sustainability solutions, circular business model development, and ecosystem partnerships for sustainability",
                    "color": "#388E3C",
                    "questions": [
                        {
                            "question": "How does your innovation process prioritize sustainability solutions?",
                            "options": [
                                {"text": "Traditional innovation with no ESG focus", "level": 1},
                                {"text": "Basic awareness of circular economy concepts", "level": 2},
                                {"text": "Initial ideation for sustainability solutions", "level": 3},
                                {"text": "Defined innovation roadmap for circularity", "level": 4},
                                {"text": "Pioneering disruptive sustainability innovations", "level": 9}
                            ]
                        },
                        {
                            "question": "What level of circular economy integration exists in your digital solutions?",
                            "options": [
                                {"text": "No circular economy integration", "level": 1},
                                {"text": "Awareness of circular economy opportunities", "level": 2},
                                {"text": "Pilot digital circular economy initiatives", "level": 5},
                                {"text": "Scaled circular business workflows", "level": 6},
                                {"text": "Systematic open innovation partnerships for circularity", "level": 7}
                            ]
                        },
                        {
                            "question": "How extensive are your ecosystem partnerships for sustainability innovation?",
                            "options": [
                                {"text": "No sustainability-focused partnerships", "level": 1},
                                {"text": "Ad-hoc collaboration on sustainability projects", "level": 3},
                                {"text": "Formal partnerships with sustainability focus", "level": 5},
                                {"text": "Ecosystem-wide collaboration platforms", "level": 7},
                                {"text": "Continuous, ecosystem-driven sustainability R&D", "level": 8}
                            ]
                        }
                    ]
                }
            ],
            "levels": [
                {"level": 1, "name": "Unaware/Traditional", "description": "No integration of sustainability into digital strategy", "color": "#F44336"},
                {"level": 2, "name": "Emerging Awareness", "description": "Basic awareness of digital sustainability concepts", "color": "#FF5722"},
                {"level": 3, "name": "Initial Assessment", "description": "Conducting initial assessments of digital environmental footprint", "color": "#FF9800"},
                {"level": 4, "name": "Strategic Planning", "description": "Developing comprehensive digital sustainability strategy", "color": "#FFC107"},
                {"level": 5, "name": "Pilot Implementation", "description": "Implementing pilot projects integrating digital and sustainability", "color": "#FFEB3B"},
                {"level": 6, "name": "Scaling & Integration", "description": "Scaling successful initiatives across organization", "color": "#8BC34A"},
                {"level": 7, "name": "Systematic Implementation", "description": "Systematic implementation across all operations", "color": "#4CAF50"},
                {"level": 8, "name": "Optimization & Leadership", "description": "Continuous optimization and industry leadership", "color": "#2E7D32"},
                {"level": 9, "name": "Transformative Impact", "description": "Transformative impact on industry and society", "color": "#1B5E20"}
            ],
            "recommendations": {
                "low": {
                    "title": "Foundation Building Recommendations",
                    "items": [
                        "Conduct comprehensive digital sustainability awareness training",
                        "Implement basic carbon footprint measurement tools",
                        "Establish sustainability governance committee",
                        "Begin stakeholder engagement for sustainability feedback"
                    ]
                },
                "medium": {
                    "title": "Strategic Development Recommendations", 
                    "items": [
                        "Develop formal digital sustainability strategy",
                        "Launch pilot projects in highest-impact domains",
                        "Implement integrated monitoring and reporting systems",
                        "Expand stakeholder collaboration platforms"
                    ]
                },
                "high": {
                    "title": "Leadership & Innovation Recommendations",
                    "items": [
                        "Share best practices and thought leadership",
                        "Develop ecosystem partnerships for innovation",
                        "Implement AI-driven optimization systems",
                        "Create industry benchmarks and standards"
                    ]
                }
            }
        };

        this.currentDomainIndex = 0;
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.results = {};
    }

    initializeApp() {
        this.bindEvents();
        this.showPage('landing-page');
    }

    bindEvents() {
        // Landing page
        const startBtn = document.getElementById('start-assessment-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                this.startAssessment();
            });
        }

        // Assessment page
        const exitBtn = document.getElementById('exit-assessment');
        if (exitBtn) {
            exitBtn.addEventListener('click', () => {
                this.exitAssessment();
            });
        }

        const prevBtn = document.getElementById('prev-btn');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.previousQuestion();
            });
        }

        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextQuestion();
            });
        }

        // Results page
        const exportBtn = document.getElementById('export-pdf-btn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                this.exportPDF();
            });
        }

        const shareBtn = document.getElementById('share-results-btn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                this.showShareModal();
            });
        }

        const retakeBtn = document.getElementById('retake-assessment-btn');
        if (retakeBtn) {
            retakeBtn.addEventListener('click', () => {
                this.retakeAssessment();
            });
        }

        // Share modal
        const closeModalBtn = document.getElementById('close-share-modal');
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                this.hideShareModal();
            });
        }

        document.querySelectorAll('.share-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.shareResults(e.target.dataset.platform);
            });
        });
    }

    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('hidden');
        });
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
        }
    }

    startAssessment() {
        this.currentDomainIndex = 0;
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.updateAssessmentView();
        this.showPage('assessment-page');
    }

    exitAssessment() {
        if (confirm('Are you sure you want to exit the assessment? Your progress will be lost.')) {
            this.showPage('landing-page');
        }
    }

    updateAssessmentView() {
        const domain = this.data.domains[this.currentDomainIndex];
        const question = domain.questions[this.currentQuestionIndex];
        
        // Update progress
        const totalQuestions = this.data.domains.reduce((sum, d) => sum + d.questions.length, 0);
        const completedQuestions = this.currentDomainIndex * 3 + this.currentQuestionIndex;
        const progressPercentage = Math.round((completedQuestions / totalQuestions) * 100);
        
        const currentDomainEl = document.getElementById('current-domain');
        const progressPercentageEl = document.getElementById('progress-percentage');
        const progressFillEl = document.getElementById('progress-fill');
        
        if (currentDomainEl) currentDomainEl.textContent = `Domain ${this.currentDomainIndex + 1} of ${this.data.domains.length}`;
        if (progressPercentageEl) progressPercentageEl.textContent = `${progressPercentage}%`;
        if (progressFillEl) progressFillEl.style.width = `${progressPercentage}%`;

        // Update domain info
        const domainBadgeEl = document.getElementById('domain-badge');
        const domainNameEl = document.getElementById('domain-name');
        const domainDescEl = document.getElementById('domain-description');
        
        if (domainBadgeEl) {
            domainBadgeEl.style.backgroundColor = domain.color;
            domainBadgeEl.textContent = domain.abbreviation;
        }
        if (domainNameEl) domainNameEl.textContent = domain.name;
        if (domainDescEl) domainDescEl.textContent = domain.description;

        // Update question
        const questionTextEl = document.getElementById('question-text');
        if (questionTextEl) questionTextEl.textContent = question.question;
        
        // Create options
        const optionsContainer = document.getElementById('question-options');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-button';
                button.textContent = option.text;
                button.addEventListener('click', () => this.selectOption(index));
                optionsContainer.appendChild(button);
            });
        }

        // Update navigation buttons
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        if (prevBtn) prevBtn.disabled = this.currentDomainIndex === 0 && this.currentQuestionIndex === 0;
        if (nextBtn) nextBtn.disabled = true;
    }

    selectOption(optionIndex) {
        const domain = this.data.domains[this.currentDomainIndex];
        const question = domain.questions[this.currentQuestionIndex];
        
        // Store answer
        if (!this.answers[domain.id]) {
            this.answers[domain.id] = {};
        }
        this.answers[domain.id][this.currentQuestionIndex] = {
            optionIndex,
            level: question.options[optionIndex].level
        };

        // Update UI
        document.querySelectorAll('.option-button').forEach((btn, index) => {
            btn.classList.toggle('selected', index === optionIndex);
        });

        // Enable next button
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) nextBtn.disabled = false;
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
        } else if (this.currentDomainIndex > 0) {
            this.currentDomainIndex--;
            this.currentQuestionIndex = this.data.domains[this.currentDomainIndex].questions.length - 1;
        }
        this.updateAssessmentView();
    }

    nextQuestion() {
        const domain = this.data.domains[this.currentDomainIndex];
        
        if (this.currentQuestionIndex < domain.questions.length - 1) {
            this.currentQuestionIndex++;
            this.updateAssessmentView();
        } else if (this.currentDomainIndex < this.data.domains.length - 1) {
            this.currentDomainIndex++;
            this.currentQuestionIndex = 0;
            this.updateAssessmentView();
        } else {
            // Assessment complete
            this.calculateResults();
            this.showResults();
        }
    }

    calculateResults() {
        this.results.domainScores = {};
        let totalScore = 0;

        this.data.domains.forEach(domain => {
            const domainAnswers = this.answers[domain.id];
            let domainTotal = 0;
            let questionCount = 0;

            Object.values(domainAnswers).forEach(answer => {
                domainTotal += answer.level;
                questionCount++;
            });

            const domainScore = Math.round(domainTotal / questionCount);
            this.results.domainScores[domain.id] = domainScore;
            totalScore += domainScore;
        });

        this.results.overallScore = Math.round(totalScore / this.data.domains.length);
        this.results.level = this.getLevelInfo(this.results.overallScore);
    }

    getLevelInfo(score) {
        return this.data.levels.find(level => level.level === score) || this.data.levels[0];
    }

    showResults() {
        // Update overall score display
        const overallScoreEl = document.getElementById('overall-score');
        const scoreLevelNameEl = document.getElementById('score-level-name');
        const scoreLevelDescEl = document.getElementById('score-level-description');
        
        if (overallScoreEl) overallScoreEl.textContent = this.results.overallScore;
        if (scoreLevelNameEl) scoreLevelNameEl.textContent = this.results.level.name;
        if (scoreLevelDescEl) scoreLevelDescEl.textContent = this.results.level.description;

        // Create radar chart
        this.createRadarChart();

        // Create thermometers
        this.createThermometers();

        // Show recommendations
        this.showRecommendations();

        this.showPage('results-page');
    }

    createRadarChart() {
        const canvas = document.getElementById('radar-chart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        const labels = this.data.domains.map(domain => domain.abbreviation);
        const dataValues = this.data.domains.map(domain => this.results.domainScores[domain.id]);

        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'DSRL Scores',
                    data: dataValues,
                    backgroundColor: 'rgba(31, 184, 205, 0.2)',
                    borderColor: '#1FB8CD',
                    borderWidth: 2,
                    pointBackgroundColor: '#1FB8CD',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#1FB8CD'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        min: 0,
                        max: 9,
                        ticks: {
                            stepSize: 1
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    createThermometers() {
        const container = document.getElementById('thermometers-container');
        if (!container) return;
        
        container.innerHTML = '';

        this.data.domains.forEach(domain => {
            const score = this.results.domainScores[domain.id];
            const percentage = (score / 9) * 100;
            
            let scoreClass = 'score-low';
            if (score >= 6) scoreClass = 'score-high';
            else if (score >= 4) scoreClass = 'score-medium';

            const thermometerHtml = `
                <div class="thermometer">
                    <div class="thermometer-header">
                        <div class="thermometer-title">${domain.abbreviation}</div>
                        <div class="thermometer-score">${score}/9</div>
                    </div>
                    <div class="thermometer-bar">
                        <div class="thermometer-fill ${scoreClass}" style="height: ${percentage}%"></div>
                    </div>
                </div>
            `;
            
            container.insertAdjacentHTML('beforeend', thermometerHtml);
        });
    }

    showRecommendations() {
        const container = document.getElementById('recommendations-content');
        if (!container) return;
        
        container.innerHTML = '';

        let recommendationType;
        if (this.results.overallScore <= 3) {
            recommendationType = 'low';
        } else if (this.results.overallScore <= 6) {
            recommendationType = 'medium';
        } else {
            recommendationType = 'high';
        }

        const recommendations = this.data.recommendations[recommendationType];
        
        const recommendationHtml = `
            <div class="recommendation-category">
                <h4>${recommendations.title}</h4>
                <ul class="recommendation-list">
                    ${recommendations.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
        
        container.insertAdjacentHTML('beforeend', recommendationHtml);
    }

    exportPDF() {
        // Simulate PDF export
        alert('PDF export functionality would be implemented here. Your results would be exported as a comprehensive PDF report.');
    }

    showShareModal() {
        const modal = document.getElementById('share-modal');
        if (modal) modal.classList.remove('hidden');
    }

    hideShareModal() {
        const modal = document.getElementById('share-modal');
        if (modal) modal.classList.add('hidden');
    }

    shareResults(platform) {
        const message = `I just completed my DSRL Assessment with an overall score of ${this.results.overallScore}/9 - ${this.results.level.name}!`;
        
        switch(platform) {
            case 'email':
                window.location.href = `mailto:?subject=My DSRL Assessment Results&body=${encodeURIComponent(message)}`;
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(message)}`, '_blank');
                break;
            case 'copy':
                navigator.clipboard.writeText(message + ' ' + window.location.href);
                alert('Results copied to clipboard!');
                break;
        }
        this.hideShareModal();
    }

    retakeAssessment() {
        if (confirm('Are you sure you want to retake the assessment? This will reset all your current results.')) {
            this.startAssessment();
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new DSRLAssessment();
    app.initializeApp();
});
const quizData = {
    questions: [
        {
            id: 1,
            module: '岗位可替代度',
            text: '如果你突然离岗两周，公司业务会：',
            options: [
                { label: 'A', text: '几乎不受影响', scores: { a: 4, b: 0, c: 0 } },
                { label: 'B', text: '有轻微影响', scores: { a: 3, b: 0, c: 0 } },
                { label: 'C', text: '明显受影响', scores: { a: 2, b: 0, c: 0 } },
                { label: 'D', text: '需要专人顶替', scores: { a: 1, b: 0, c: 0 } }
            ]
        },
        {
            id: 2,
            module: '岗位可替代度',
            text: '你的日常工作内容中，重复性任务占比：',
            options: [
                { label: 'A', text: '70%以上', scores: { a: 4, b: 0, c: 0 } },
                { label: 'B', text: '30–70%', scores: { a: 3, b: 0, c: 0 } },
                { label: 'C', text: '10–30%', scores: { a: 2, b: 0, c: 0 } },
                { label: 'D', text: '几乎没有', scores: { a: 1, b: 0, c: 0 } }
            ]
        },
        {
            id: 3,
            module: '岗位可替代度',
            text: '你的工作是否可以写成清晰的操作流程？',
            options: [
                { label: 'A', text: '完全可以', scores: { a: 4, b: 0, c: 0 } },
                { label: 'B', text: '大部分可以', scores: { a: 3, b: 0, c: 0 } },
                { label: 'C', text: '部分可以', scores: { a: 2, b: 0, c: 0 } },
                { label: 'D', text: '几乎不可能', scores: { a: 1, b: 0, c: 0 } }
            ]
        },
        {
            id: 4,
            module: '岗位可替代度',
            text: '你在工作中的核心价值更接近：',
            options: [
                { label: 'A', text: '执行既定流程', scores: { a: 4, b: 0, c: 0 } },
                { label: 'B', text: '整理与汇总信息', scores: { a: 3, b: 0, c: 0 } },
                { label: 'C', text: '综合判断与协调', scores: { a: 2, b: 0, c: 0 } },
                { label: 'D', text: '决策与规则制定', scores: { a: 1, b: 0, c: 0 } }
            ]
        },
        {
            id: 5,
            module: '岗位可替代度',
            text: '如果引入成熟AI工具，你的岗位最可能发生：',
            options: [
                { label: 'A', text: '人数减少', scores: { a: 4, b: 0, c: 0 } },
                { label: 'B', text: '工作节奏加快', scores: { a: 3, b: 0, c: 0 } },
                { label: 'C', text: '职责升级', scores: { a: 2, b: 0, c: 0 } },
                { label: 'D', text: '影响不大', scores: { a: 1, b: 0, c: 0 } }
            ]
        },
        {
            id: 6,
            module: 'AI工具真实使用深度',
            text: '你在工作中使用AI工具的频率：',
            options: [
                { label: 'A', text: '从未使用', scores: { a: 0, b: 0, c: 0 } },
                { label: 'B', text: '偶尔尝试', scores: { a: 0, b: 1, c: 0 } },
                { label: 'C', text: '高频单点使用', scores: { a: 0, b: 3, c: 0 } },
                { label: 'D', text: '已融入工作流程', scores: { a: 0, b: 4, c: 0 } }
            ]
        },
        {
            id: 7,
            module: 'AI工具真实使用深度',
            text: '你目前使用过的AI工具类型：',
            options: [
                { label: 'A', text: '只用基础对话类（如ChatGPT、豆包）', scores: { a: 0, b: 1, c: 0 } },
                { label: 'B', text: '使用写作/视频/PPT等生成工具', scores: { a: 0, b: 2, c: 0 } },
                { label: 'C', text: '使用数据/代码辅助类工具', scores: { a: 0, b: 3, c: 0 } },
                { label: 'D', text: '多工具组合使用', scores: { a: 0, b: 4, c: 0 } }
            ]
        },
        {
            id: 8,
            module: 'AI工具真实使用深度',
            text: '你向AI工具下达需求时，通常：',
            options: [
                { label: 'A', text: '使用关键词/短句提问', scores: { a: 0, b: 1, c: 0 } },
                { label: 'B', text: '给出具体场景和交付标准', scores: { a: 0, b: 2, c: 0 } },
                { label: 'C', text: '多轮追问优化结果', scores: { a: 0, b: 3, c: 0 } },
                { label: 'D', text: '设计结构化提示词', scores: { a: 0, b: 4, c: 0 } }
            ]
        },
        {
            id: 9,
            module: 'AI工具真实使用深度',
            text: '你是否让多个AI工具协同完成任务？',
            options: [
                { label: 'A', text: '从未', scores: { a: 0, b: 0, c: 0 } },
                { label: 'B', text: '偶尔', scores: { a: 0, b: 1, c: 0 } },
                { label: 'C', text: '有意识组合', scores: { a: 0, b: 3, c: 0 } },
                { label: 'D', text: '已形成固定流程', scores: { a: 0, b: 4, c: 0 } }
            ]
        },
        {
            id: 10,
            module: 'AI工具真实使用深度',
            text: '当AI结果不理想时，你更可能：',
            options: [
                { label: 'A', text: '放弃，觉得AI不好用', scores: { a: 0, b: 0, c: 0 } },
                { label: 'B', text: '换个说法', scores: { a: 0, b: 2, c: 0 } },
                { label: 'C', text: '尝试其他工具', scores: { a: 0, b: 3, c: 0 } },
                { label: 'D', text: '调整任务结构', scores: { a: 0, b: 4, c: 0 } }
            ]
        },
        {
            id: 11,
            module: 'AI工具真实使用深度',
            text: '你是否有\"自己的AI使用方法论\"？',
            options: [
                { label: 'A', text: '没有', scores: { a: 0, b: 0, c: 0 } },
                { label: 'B', text: '有一些经验', scores: { a: 0, b: 2, c: 0 } },
                { label: 'C', text: '有固定流程', scores: { a: 0, b: 3, c: 0 } },
                { label: 'D', text: '能总结成体系', scores: { a: 0, b: 4, c: 0 } }
            ]
        },
        {
            id: 12,
            module: '真实成长能力',
            text: '过去半年，你是否为提升职业能力支付过任何费用？',
            options: [
                { label: 'A', text: '从未', scores: { a: 0, b: 0, c: 0 } },
                { label: 'B', text: '购买过低价课程（≤99元）', scores: { a: 0, b: 0, c: 1 } },
                { label: 'C', text: '购买过系统课程（100元–1000元）', scores: { a: 0, b: 0, c: 3 } },
                { label: 'D', text: '购买过高价项目或长期训练', scores: { a: 0, b: 0, c: 4 } }
            ]
        },
        {
            id: 13,
            module: '真实成长能力',
            text: '过去半年，你是否为提升AI能力做过以下行为：',
            options: [
                { label: 'A', text: '没有', scores: { a: 0, b: 0, c: 0 } },
                { label: 'B', text: '看过零散教程', scores: { a: 0, b: 0, c: 1 } },
                { label: 'C', text: '做过项目练习', scores: { a: 0, b: 0, c: 3 } },
                { label: 'D', text: '有系统性成果（作品/方法论）', scores: { a: 0, b: 0, c: 4 } }
            ]
        },
        {
            id: 14,
            module: '真实成长能力',
            text: '面对一个新的AI工具，你通常：',
            options: [
                { label: 'A', text: '完全不感兴趣', scores: { a: 0, b: 0, c: 0 } },
                { label: 'B', text: '简单尝试几次就放弃', scores: { a: 0, b: 0, c: 1 } },
                { label: 'C', text: '深度使用之后再评估是否适合自己', scores: { a: 0, b: 0, c: 3 } },
                { label: 'D', text: '会逼自己完成一个实战场景', scores: { a: 0, b: 0, c: 4 } }
            ]
        },
        {
            id: 15,
            module: '真实成长能力',
            text: '你是否愿意为\"AI能力升级\"每周专门安排固定时间？',
            options: [
                { label: 'A', text: '没有任何意愿', scores: { a: 0, b: 0, c: 0 } },
                { label: 'B', text: '工作有需要再学', scores: { a: 0, b: 0, c: 2 } },
                { label: 'C', text: '业余时间主动学习', scores: { a: 0, b: 0, c: 3 } },
                { label: 'D', text: '已有相对长期固定的时间段', scores: { a: 0, b: 0, c: 4 } }
            ]
        },
        {
            id: 16,
            module: '真实成长能力',
            text: '如果未来一年你不主动升级能力，你认为结果会是：',
            options: [
                { label: 'A', text: '影响不大', scores: { a: 0, b: 0, c: 0 } },
                { label: 'B', text: '有一点风险', scores: { a: 0, b: 0, c: 2 } },
                { label: 'C', text: '竞争力下降', scores: { a: 0, b: 0, c: 3 } },
                { label: 'D', text: '明显落后', scores: { a: 0, b: 0, c: 4 } }
            ]
        },
        {
            id: 17,
            module: '真实成长能力',
            text: '如果需要为能力升级投入资金，你的态度：',
            options: [
                { label: 'A', text: '不考虑', scores: { a: 0, b: 0, c: 0 } },
                { label: 'B', text: '小额尝试', scores: { a: 0, b: 0, c: 1 } },
                { label: 'C', text: '视价值决定', scores: { a: 0, b: 0, c: 3 } },
                { label: 'D', text: '愿意持续投入', scores: { a: 0, b: 0, c: 4 } }
            ]
        },
        {
            id: 18,
            module: '风险意识与方向清晰度',
            text: '你最担心的职业风险是：',
            options: [
                { label: 'A', text: '收入停滞', scores: { a: 0, b: 0, c: 0, type: 'income' } },
                { label: 'B', text: '被边缘化', scores: { a: 0, b: 0, c: 0, type: 'marginal' } },
                { label: 'C', text: '被AI替代', scores: { a: 0, b: 0, c: 0, type: 'replace' } },
                { label: 'D', text: '找不到方向', scores: { a: 0, b: 0, c: 0, type: 'direction' } }
            ]
        },
        {
            id: 19,
            module: '风险意识与方向清晰度',
            text: '你是否清楚未来三年的能力升级路径？',
            options: [
                { label: 'A', text: '完全没有', scores: { a: 0, b: 0, c: 0, type: 'no_path' } },
                { label: 'B', text: '大致想过', scores: { a: 0, b: 0, c: 0, type: 'rough_path' } },
                { label: 'C', text: '有阶段目标', scores: { a: 0, b: 0, c: 0, type: 'stages' } },
                { label: 'D', text: '有明确路线', scores: { a: 0, b: 0, c: 0, type: 'clear_path' } }
            ]
        },
        {
            id: 20,
            module: '风险意识与方向清晰度',
            text: '你对当前竞争环境的真实感受：',
            options: [
                { label: 'A', text: '混乱迷茫', scores: { a: 0, b: 0, c: 0, type: 'chaos' } },
                { label: 'B', text: '压力增大', scores: { a: 0, b: 0, c: 0, type: 'pressure' } },
                { label: 'C', text: '风险可控', scores: { a: 0, b: 0, c: 0, type: 'controllable' } },
                { label: 'D', text: '机会增多', scores: { a: 0, b: 0, c: 0, type: 'opportunity' } }
            ]
        }
    ]
};

let currentQuestionIndex = 0;
let userAnswers = {};

document.addEventListener('DOMContentLoaded', function() {
    initWelcomePage();
    initCardsAnimation();
    initBackToTop();
});

function initWelcomePage() {
    const startBtn = document.getElementById('start-btn');
    const bottomStartBtn = document.getElementById('bottomStartQuiz');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    const brandBadge = document.getElementById('brandBadge');
    
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            startQuiz();
        });
    }
    
    if (bottomStartBtn) {
        bottomStartBtn.addEventListener('click', function() {
            startQuiz();
        });
    }
    
    if (brandBadge) {
        brandBadge.addEventListener('click', function() {
            showPage('welcome-page');
        });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', goToPrevQuestion);
    }
    
    if (submitBtn) {
        submitBtn.addEventListener('click', submitQuiz);
    }
}

function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers = {};
    showPage('quiz-page');
    renderQuestion();
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function renderQuestion() {
    const question = quizData.questions[currentQuestionIndex];
    
    document.getElementById('moduleTitle').textContent = question.module;
    document.getElementById('questionText').textContent = question.text;
    document.getElementById('questionNumber').textContent = currentQuestionIndex + 1;
    
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = ((currentQuestionIndex + 1) / quizData.questions.length * 100) + '%';
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-label">${option.label}</span>${option.text}`;
        
        if (userAnswers[currentQuestionIndex] === index) {
            btn.classList.add('selected');
        }
        
        btn.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(btn);
    });
    
    updateNavButtons();
}

function selectOption(index) {
    const options = document.querySelectorAll('.option-btn');
    options.forEach(btn => btn.classList.remove('selected'));
    
    options[index].classList.add('selected');
    
    userAnswers[currentQuestionIndex] = index;
    
    if (currentQuestionIndex < quizData.questions.length - 1) {
        setTimeout(() => {
            currentQuestionIndex++;
            renderQuestion();
        }, 600);
    } else {
        renderQuestion();
    }
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    const hasAnswer = userAnswers[currentQuestionIndex] !== undefined;
    
    if (currentQuestionIndex === quizData.questions.length - 1) {
        submitBtn.style.display = hasAnswer ? 'block' : 'none';
    } else {
        submitBtn.style.display = 'none';
    }
}

function goToPrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

function goToNextQuestion() {
    if (currentQuestionIndex < quizData.questions.length - 1 && userAnswers[currentQuestionIndex] !== undefined) {
        currentQuestionIndex++;
        renderQuestion();
    }
}

const reportData = {
    '结构风险者': {
        badge: '高风险人群',
        title: '结构风险者',
        description: '你正处在一个需要主动升级能力结构的阶段。随着技术不断提升效率，你所处的岗位成长空间可能会逐渐变窄，因此提前开始能力升级，会为未来创造更大的选择空间。对你来说，现在正是一个适合重新思考职业结构的时期。',
        subtitle: '（高风险 + 中低AI能力 + 中低执行力）',
        image: '文件/结构风险者.png',
        riskAnalysis: `
            <p>从你的回答来看：</p>
            <ul>
                <li>你的岗位中重复性任务占比较高</li>
                <li>工作内容较容易流程化</li>
                <li>在引入成熟AI工具后，岗位存在压缩可能</li>
            </ul>
            <p>这意味着，你当前的核心价值更多集中在"执行层面"，而非"结构与决策层面"。</p>
            <p>在效率持续提升的环境下，这类岗位的安全边际通常会逐步降低。</p>
        `,
        aiMaturity: `
            <p>你的AI使用仍停留在基础阶段：</p>
            <ul>
                <li>使用频率有限</li>
                <li>主要为单点工具尝试</li>
                <li>尚未形成固定工作流</li>
            </ul>
            <p>这代表你对技术变化的适应能力还未形成稳定优势。</p>
        `,
        growthMomentum: `
            <p>你的能力升级行为偏碎片化：</p>
            <ul>
                <li>投入成本有限</li>
                <li>输出成果较少</li>
                <li>尚未建立长期升级机制</li>
            </ul>
            <p>这不是能力不足，而是结构尚未建立。</p>
        `,
        overallJudgment: `
            <p>你当前处于：</p>
            <p>结构暴露度较高 + 能力储备偏弱的阶段。</p>
            <p>如果未来行业效率进一步提升，你更容易成为被优化的一端，而非升级的一端。</p>
            <p>但这是一种"可改变的风险"，而不是既定命运。</p>
        `,
        upgradeDirection: `
            <p>你当前最重要的，不是获取更多信息，而是完成三种转变：</p>
            <ul>
                <li>从执行型角色向结构型角色过渡</li>
                <li>从单点工具尝试向系统使用过渡</li>
                <li>从零散学习向持续积累过渡</li>
            </ul>
            <p>方向明确，但真正的难点在于如何排序与落地。</p>
        `
    },
    '转型探索者': {
        badge: '中风险人群',
        title: '转型探索者',
        description: '你已经开始适应变化，但能力优势还在形成过程中。你对技术变化是开放的，也在不断尝试新的方法，但目前这些尝试还没有完全形成稳定的能力体系。如果未来能够将这些分散的尝试逐步整合为稳定能力，你的成长空间会明显扩大。',
        subtitle: '（中风险 + 中AI能力 + 中执行力）',
        image: '文件/转型探索者.png',
        riskAnalysis: `
            <p>你的岗位存在一定可被优化空间，但并非高危结构。</p>
            <p>重复性任务与判断型任务并存。</p>
            <p>这意味着，你具备升级空间，但需要主动选择方向。</p>
        `,
        aiMaturity: `
            <p>你已经开始使用AI工具：</p>
            <ul>
                <li>有基础使用经验</li>
                <li>能在部分场景中应用</li>
                <li>但尚未形成稳定工作流</li>
            </ul>
            <p>目前阶段更像"工具使用者"，尚未成为"结构优化者"。</p>
        `,
        growthMomentum: `
            <p>你具备一定升级意愿和行动能力：</p>
            <ul>
                <li>有学习行为</li>
                <li>有阶段性投入</li>
                <li>但缺少系统整合</li>
            </ul>
            <p>最大风险不是被替代，而是长期停留在"尝试阶段"。</p>
        `,
        overallJudgment: `
            <p>你处在一个转型临界点。</p>
            <p>继续碎片化尝试，你的优势不会积累。</p>
            <p>完成结构整合，你会明显跃升。</p>
        `,
        upgradeDirection: `
            <p>你需要完成三件事：</p>
            <ul>
                <li>明确一个能力叠加方向</li>
                <li>建立固定升级机制</li>
                <li>将AI能力与岗位场景深度绑定</li>
            </ul>
            <p>方向选择，将决定你未来三年的差距。</p>
        `
    },
    '潜力爆发者': {
        badge: '潜力人群',
        title: '潜力爆发者',
        description: '你具备不错的能力基础，但仍在寻找最适合自己的发展方向。从岗位结构来看，你当前的工作风险并不高，同时你也已经具备一定的AI理解能力和学习意识，你唯一需要的就是放平心态。一旦找到稳定的发展方向，并持续积累，你的成长速度往往会比大多数人更快。',
        subtitle: '（低风险 + 中高AI能力 + 中执行力）',
        image: '文件/潜力爆发者.png',
        riskAnalysis: `
            <p>你的岗位结构相对稳健：</p>
            <ul>
                <li>判断成分较高</li>
                <li>标准化程度较低</li>
                <li>替代风险可控</li>
            </ul>
            <p>你并非结构性高危人群。</p>
        `,
        aiMaturity: `
            <p>你具备一定AI理解能力：</p>
            <ul>
                <li>能优化提问</li>
                <li>理解工具边界</li>
                <li>有方法意识</li>
            </ul>
            <p>这说明你具备升级潜力。</p>
        `,
        growthMomentum: `
            <p>你有一定行动能力，但焦虑感偏高。</p>
            <p>你的问题不是能力不足，而是方向不清晰。</p>
        `,
        overallJudgment: `
            <p>你属于"潜力型个体"。</p>
            <p>风险不在当下，而在战略选择。</p>
            <p>如果方向分散，优势无法累积。</p>
            <p>如果方向集中，成长速度会明显加快。</p>
        `,
        upgradeDirection: `
            <p>你当前需要：</p>
            <ul>
                <li>确定一个长期能力叠加方向</li>
                <li>从广泛尝试转为聚焦深耕</li>
                <li>将焦虑转化为结构行动</li>
            </ul>
            <p>对你而言，选择比努力更重要。</p>
        `
    },
    '主动进化者': {
        badge: '高成长人群',
        title: '主动进化者',
        description: '你已经把技术变化转化为自己的长期优势。而且，学习和升级对你来说更像是一种持续行为。因此，你当前的挑战已经不再是是否能够适应变化，而是如何进一步扩大自己的优势。通过持续积累和能力外延，你有机会在未来形成更大的影响力。',
        subtitle: '（低风险 + 高AI能力 + 高执行力）',
        image: '文件/主动进化者.png',
        riskAnalysis: `
            <p>你的岗位替代风险较低：</p>
            <ul>
                <li>价值集中在判断与协调</li>
                <li>标准化程度较低</li>
                <li>具备结构性优势</li>
            </ul>
            <p>你处在相对安全区域。</p>
        `,
        aiMaturity: `
            <p>你已经具备结构化使用能力：</p>
            <ul>
                <li>多工具协同</li>
                <li>固定工作流</li>
                <li>方法论意识</li>
            </ul>
            <p>你不是AI初级使用者。</p>
        `,
        growthMomentum: `
            <p>你具备持续投入与长期执行能力。</p>
            <p>升级对你来说是习惯，而非临时决策。</p>
        `,
        overallJudgment: `
            <p>你已进入主动布局阶段。</p>
            <p>你的问题不是"是否被替代"，而是：</p>
            <p>如何扩大势能。</p>
        `,
        upgradeDirection: `
            <p>你当前的关键在于：</p>
            <ul>
                <li>打造可迁移能力</li>
                <li>构建跨领域协同</li>
                <li>提升影响力与结构话语权</li>
            </ul>
            <p>你已进入更高阶竞争层级。</p>
        `
    }
};

function submitQuiz() {
    const scores = calculateScores();
    console.log('问卷提交成功！');
    console.log('用户答案:', userAnswers);
    console.log('得分结果:', scores);
    
    const reportType = determineReportType(scores);
    console.log('报告类型:', reportType);
    
    renderReport(reportType);
    showPage('report-page');
}

function determineReportType(scores) {
    const aScore = scores.a;
    const bScore = scores.b;
    const cScore = scores.c;
    
    if (aScore >= 15 && bScore <= 8 && cScore <= 8) {
        return '结构风险者';
    } else if (aScore >= 9 && aScore <= 14 && bScore >= 9 && bScore <= 16 && cScore <= 12) {
        return '转型探索者';
    } else if (aScore <= 8 && bScore >= 9 && bScore <= 16 && cScore >= 9 && cScore <= 16) {
        return '潜力爆发者';
    } else if (aScore <= 8 && bScore >= 17 && cScore >= 17) {
        return '主动进化者';
    } else if (aScore >= 15) {
        return '结构风险者';
    } else if (aScore >= 9) {
        return '转型探索者';
    } else if (bScore >= 17 && cScore >= 17) {
        return '主动进化者';
    } else {
        return '潜力爆发者';
    }
}

function renderReport(reportType) {
    const report = reportData[reportType];
    
    document.getElementById('reportTitle').textContent = report.title;
    
    const descriptionEl = document.getElementById('reportDescription');
    const sentences = report.description.split('。').filter(s => s.trim());
    descriptionEl.innerHTML = sentences.map(sentence => `<p>${sentence}。</p>`).join('');
    
    document.getElementById('riskAnalysis').innerHTML = report.riskAnalysis;
    document.getElementById('aiMaturity').innerHTML = report.aiMaturity;
    document.getElementById('growthMomentum').innerHTML = report.growthMomentum;
    document.getElementById('overallJudgment').innerHTML = report.overallJudgment;
    document.getElementById('upgradeDirection').innerHTML = report.upgradeDirection;
    
    document.getElementById('reportRobotRisk').style.display = 'none';
    document.getElementById('reportRobotExplorer').style.display = 'none';
    document.getElementById('reportRobotAnxious').style.display = 'none';
    document.getElementById('reportRobotEvolver').style.display = 'none';
    
    const robotIds = {
        '结构风险者': 'reportRobotRisk',
        '转型探索者': 'reportRobotExplorer',
        '潜力爆发者': 'reportRobotAnxious',
        '主动进化者': 'reportRobotEvolver'
    };
    document.getElementById(robotIds[reportType]).style.display = 'block';
    
    let scores;
    const userAnswersCount = Object.keys(userAnswers).length;
    if (userAnswersCount > 0) {
        scores = calculateScores();
    } else {
        scores = getDefaultScores(reportType);
    }
    
    renderGauge(scores);
    renderRadarChart(scores);
    
    setupSectionNavigation();
}

function getDefaultScores(reportType) {
    const defaultScores = {
        '结构风险者': { a: 20, b: 5, c: 5 },
        '转型探索者': { a: 12, b: 12, c: 10 },
        '潜力爆发者': { a: 6, b: 14, c: 12 },
        '主动进化者': { a: 4, b: 20, c: 20 }
    };
    return defaultScores[reportType] || { a: 10, b: 10, c: 10 };
}

function renderGauge(scores) {
    const maxScore = 24;
    const riskPercent = Math.round((scores.a / maxScore) * 100);
    const circumference = 2 * Math.PI * 70;
    const offset = circumference - (riskPercent / 100) * circumference;
    
    const gauge = document.getElementById('riskGauge');
    const value = document.getElementById('riskValue');
    
    setTimeout(() => {
        gauge.style.strokeDashoffset = offset;
        animateValue(value, 0, riskPercent, 1500);
        updateRiskLevelIndicator(scores.a);
    }, 300);
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start) + '%';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function renderStarRatings(scores) {
    const maxScore = 24;
    const riskStars = Math.round((1 - scores.a / maxScore) * 5);
    const aiStars = Math.round((scores.b / maxScore) * 5);
    const learningStars = Math.round((scores.b / maxScore) * 5);
    const executionStars = Math.round((scores.c / maxScore) * 5);
    const potentialStars = Math.round(((scores.b + scores.c) / (maxScore * 2)) * 5);
    
    renderStars('riskStars', riskStars);
    renderStars('aiStars', aiStars);
    renderStars('learningStars', learningStars);
    renderStars('executionStars', executionStars);
    renderStars('potentialStars', potentialStars);
}

function renderStars(elementId, count) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.className = 'star' + (i < count ? ' filled' : '');
        star.textContent = '★';
        container.appendChild(star);
    }
}

function renderCoordinateChart(scores) {
    const maxScore = 24;
    const x = 50 + (scores.a / maxScore) * 45;
    const y = 95 - (scores.b / maxScore) * 90;
    
    const dot = document.getElementById('coordinateDot');
    setTimeout(() => {
        dot.style.left = x + '%';
        dot.style.top = y + '%';
    }, 300);
}

function renderRadarChart(scores) {
    const maxScore = 24;
    const safety = 1 - (scores.a / maxScore);
    const aiAbility = scores.b / maxScore;
    const learning = scores.b / maxScore;
    const execution = scores.c / maxScore;
    const potential = (scores.b + scores.c) / (maxScore * 2);
    
    const points = calculateRadarPoints([safety, aiAbility, learning, execution, potential]);
    const polygon = document.getElementById('radarPolygon');
    setTimeout(() => {
        polygon.setAttribute('points', points);
    }, 300);
}

function calculateRadarPoints(values) {
    const centerX = 150;
    const centerY = 150;
    const maxRadius = 120;
    const angles = [-90, -18, 54, 126, 198];
    
    return values.map((value, index) => {
        const angle = angles[index] * Math.PI / 180;
        const radius = value * maxRadius;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        return x + ',' + y;
    }).join(' ');
}





function previewReport(reportType) {
    renderReport(reportType);
    showPage('report-page');
}

function calculateScores() {
    let scoreA = 0;
    let scoreB = 0;
    let scoreC = 0;
    
    for (let i = 0; i < quizData.questions.length; i++) {
        const question = quizData.questions[i];
        const selectedOptionIndex = userAnswers[i];
        
        if (selectedOptionIndex !== undefined) {
            const option = question.options[selectedOptionIndex];
            scoreA += option.scores.a;
            scoreB += option.scores.b;
            scoreC += option.scores.c;
        }
    }
    
    return {
        a: scoreA,
        b: scoreB,
        c: scoreC
    };
}

function initMouseFollower() {
    const mouseFollower = document.getElementById('mouseFollower');
    let isActive = false;
    
    if (!mouseFollower) return;
    
    if (window.innerWidth <= 640) {
        return;
    }
    
    document.addEventListener('mousemove', function(e) {
        if (!isActive) {
            isActive = true;
            mouseFollower.classList.add('active');
        }
        
        mouseFollower.style.left = e.clientX + 'px';
        mouseFollower.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mouseenter', function() {
        mouseFollower.classList.add('active');
    });
    
    document.addEventListener('mouseleave', function() {
        mouseFollower.classList.remove('active');
    });
}

function initCardsAnimation() {
    const cards = document.querySelectorAll('.feature-card');
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 120);
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

function initCardsModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalContent = document.getElementById('modalContent');
    const cards = document.querySelectorAll('.feature-card');
    
    if (!cards.length || !modalOverlay) return;
    
    const cardContents = {
        '1': '20道结构化题目：精心设计的专业问卷，涵盖技能、经验、行业趋势等多个维度，全面评估你的职业状况。',
        '2': '3个评估维度：从技术替代性、创造力要求、社交互动性三个维度进行综合评分。',
        '3': '4种人群分类：将测试者分为安全型、转型型、提升型、创新型四类，提供针对性建议。',
        '4': '10分钟完成：快速高效的测试流程，只需10分钟即可获得完整的职业风险评估报告。'
    };
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardId = this.getAttribute('data-card');
            if (modalContent && cardContents[cardId]) {
                modalContent.textContent = cardContents[cardId];
            }
            if (modalOverlay) {
                modalOverlay.classList.add('active');
            }
        });
    });
    
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            if (modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
        }
    });
}

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (!backToTop) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 更新关键要点
function updateKeyInsights(scores, reportType) {
    // 更新风险级别
    const riskLevel = scores.a >= 15 ? '高风险' : scores.a >= 9 ? '中等风险' : '低风险';
    document.getElementById('insightRiskLevel').textContent = riskLevel;
    
    // 更新AI能力成熟度
    const aiMaturity = scores.b >= 17 ? '高级阶段' : scores.b >= 9 ? '中级阶段' : '入门阶段';
    document.getElementById('insightAIMaturity').textContent = aiMaturity;
    
    // 更新成长执行力
    const growthMomentum = scores.c >= 17 ? '高水平' : scores.c >= 9 ? '中等水平' : '基础水平';
    document.getElementById('insightGrowthMomentum').textContent = growthMomentum;
    
    // 更新升级优先级
    const upgradePriority = scores.a >= 15 || scores.b <= 8 ? '高优先级' : '中等优先级';
    document.getElementById('insightUpgradePriority').textContent = upgradePriority;
}

// 章节导航交互
function setupSectionNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.report-section');
    
    // 点击导航链接
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // 更新活动状态
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // 滚动时更新活动状态
    window.addEventListener('scroll', function() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 100) && 
                window.scrollY < (sectionTop + sectionHeight - 100)) {
                currentSection = section.id;
            }
        });
        
        // 更新导航链接
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// 更新风险级别指示器
function updateRiskLevelIndicator(score) {
    const riskLevels = document.querySelectorAll('.risk-level-dot');
    
    // 重置所有
    riskLevels.forEach(dot => {
        dot.style.opacity = '0.3';
        dot.style.transform = 'scale(1)';
    });
    
    // 根据分数高亮对应级别
    if (score >= 15) { // 高风险
        document.querySelector('.risk-level-high').style.opacity = '1';
        document.querySelector('.risk-level-high').style.transform = 'scale(1.2)';
    } else if (score >= 9) { // 中风险
        document.querySelector('.risk-level-medium').style.opacity = '1';
        document.querySelector('.risk-level-medium').style.transform = 'scale(1.2)';
    } else { // 低风险
        document.querySelector('.risk-level-low').style.opacity = '1';
        document.querySelector('.risk-level-low').style.transform = 'scale(1.2)';
    }
}

/**
 * 2023학년도 한영고등학교 2학년 1학기 중간고사 수학 I 데이터베이스
 * 제작자: AP수학학원 조수 제미나이
 * 엔진 버전: v1.3 [IRONCLAD] (Graph-Focused Edition)
 */

const questionBank = [
    {
        "content": "$\\sqrt[3]{27} \\times \\sqrt[6]{64}$ 의 값은? [4.0점]",
        "choices": ["6", "12", "18", "24", "48"],
        "solution": "1. 지수 법칙 적용: $3^{3 \\times \\tf{1}{3}} \\times 2^{6 \\times \\tf{1}{6}}$<br>2. $\\therefore 3 \\times 2 = 6$",
        "answer": "①"
    },
    {
        "content": "$\\log_{a} 4 = 2, \\log_{3} b = -1$ 일 때, $\\tf{a}{b}$ 의 값은? [4.2점]",
        "choices": ["3", "6", "9", "12", "15"],
        "solution": "1. 로그의 정의: $a^2 = 4 \\implies a=2$ (단, $a>0$), $b = 3^{-1} = \\tf{1}{3}$<br>2. $\\therefore \\tf{a}{b} = \\tf{2}{1/3} = 6$",
        "answer": "②"
    },
    {
        "content": "함수 $y = \\log_{\\tf{1}{3}}(x-2)-1$ 에 대한 설명으로 옳지 않은 것은? [4.2점]",
        "choices": ["정의역은 $\\{x|x>2\\}$이다.", "그래프의 점근선은 $x=2$이다.", "그래프는 점 $(3, -1)$을 지난다.", "$x$값이 증가하면 $y$값은 감소한다.", "$y = \\log_{3}x$ 그래프를 평행이동하면 겹쳐진다."],
        "solution": "1. 함수 분석: 밑이 $1/3$이므로 감소함수이며, 점근선은 $x=2$, 정의역은 $x>2$이다.<br>2. 점 대입: $x=3 \\implies y = \\log_{1/3}1 - 1 = -1$ (참)<br>3. **[Logical Anchor]** 밑이 $3$인 로그함수와 밑이 $1/3$인 로그함수는 대칭이동 없이는 평행이동만으로 겹칠 수 없다.<br>4. $\\therefore$ ⑤",
        "answer": "⑤"
    },
    {
        "content": "다음 중 옳지 않은 것은? [4.2점]",
        "choices": ["$45^{\\circ} = \\tf{\\pi}{4}$", "$-135^{\\circ} = -\\tf{3}{4}\\pi$", "$-\\tf{2}{3}\\pi = -120^{\\circ}$", "$\\tf{9}{5}\\pi = 320^{\\circ}$", "$\\tf{11}{6}\\pi = 330^{\\circ}$"],
        "solution": "1. 호도법 변환: $180^{\\circ} = \\pi$ 임을 이용한다.<br>2. ④ 검증: $\\tf{9}{5} \\times 180^{\\circ} = 9 \\times 36^{\\circ} = 324^{\\circ}$<br>3. $\\therefore$ 옳지 않은 것은 ④",
        "answer": "④"
    },
    {
        "content": "[중] 실수 $x$에 대하여 $\\tf{a^x - a^{-x}}{a^x + a^{-x}} = \\tf{3}{5}$ 일 때, $a^{4x}$ 의 값은? [4.2점]",
        "choices": ["4", "9", "16", "25", "36"],
        "solution": "1. **[Logical Anchor]** 분자·분모에 $a^x$를 곱하여 식을 $a^{2x}$에 관한 형태로 바꾼다.<br>2. 식 변형: $\\tf{a^{2x}-1}{a^{2x}+1} = \\tf{3}{5} \\implies 5a^{2x}-5 = 3a^{2x}+3$<br>3. $2a^{2x} = 8 \\implies a^{2x} = 4$<br>4. $\\therefore a^{4x} = (a^{2x})^2 = 4^2 = 16$",
        "answer": "③"
    },
    {
        "content": "[중] $\\log 2 = a, \\log 3 = b$ 일 때, $\\log_{6} 50$ 을 $a, b$에 대한 식으로 나타내면? [4.2점]",
        "choices": ["$\\tf{1-a}{a+b}$", "$\\tf{1+a}{a-b}$", "$\\tf{2-a}{a+b}$", "$\\tf{2-a}{a-b}$", "$\\tf{2+a}{a-b}$"],
        "solution": "1. **[Logical Anchor]** 상용로그가 주어졌으므로 밑 변환 공식을 사용하여 상용로그로 환원한다.<br>2. $\\log_{6} 50 = \\tf{\\log 50}{\\log 6} = \\tf{\\log(100/2)}{\\log(2 \\times 3)}$<br>3. 대입: $\\tf{2-\\log 2}{\\log 2 + \\log 3} = \\tf{2-a}{a+b}$<br>4. $\\therefore$ ③",
        "answer": "③"
    },
    {
        "content": "다음 중 옳지 않은 것은? [4.3점]",
        "choices": ["$\\sin 330^{\\circ} = -\\tf{1}{2}$", "$\\cos(-\\tf{\\pi}{4}) = \\tf{\\sqrt{2}}{2}$", "$\\tan \\tf{4}{3}\\pi = \\sqrt{3}$", "$\\sin 150^{\\circ} = \\tf{\\sqrt{3}}{2}$", "$\\cos 90^{\\circ} = 0$"],
        "solution": "1. 각 변환 확인: $\\sin 150^{\\circ} = \\sin(180^{\\circ}-30^{\\circ}) = \\sin 30^{\\circ} = \\tf{1}{2}$<br>2. 문제의 값 $\\tf{\\sqrt{3}}{2}$과 다르므로 옳지 않다.<br>3. $\\therefore$ ④",
        "answer": "④"
    },
    {
        "content": "[중] $\\tf{\\pi}{2} < \\theta < \\pi$ 이고 $\\sin\\theta = \\tf{3}{5}$ 일 때, $\\sin(\\tf{\\pi}{2} + \\theta) + \\tan(\\pi - \\theta) - \\cos\\theta$ 의 값은? [4.3점]",
        "choices": ["$-\\tf{3}{4}$", "$-\\tf{3}{5}$", "0", "$\\tf{3}{5}$", "$\\tf{3}{4}$"],
        "solution": "1. **[Logical Anchor]** 2사분면 각이므로 $\\cos, \\tan$의 부호가 음수임을 주의하여 값을 구한다.<br>2. $\\cos\\theta = -4/5, \\tan\\theta = -3/4$<br>3. 각 변환: $\\cos\\theta - \\tan\\theta - \\cos\\theta = -\\tan\\theta$<br>4. $\\therefore -(-3/4) = 3/4$",
        "answer": "⑤"
    },
    {
        "content": "[중상] 삼차함수 $y=f(x)$와 직선 $y=g(x)$의 그래프가 다음과 같을 때, 부등식 $2^{-f(x)} < 0.5^{g(x)}$ 의 해는? [4.3점]",
        "choices": ["$x < -3$ 또는 $x > 2$", "$-3 < x < -1$", "$-1 < x < 2$", "$-3 < x < -1$ 또는 $x > 2$", "$x < -3$ 또는 $-1 < x < 2$"],
        "solution": "<br>1. **[Logical Anchor]** 밑을 $2$로 통일하여 지수함수의 성질을 이용해 다항부등식으로 전환한다.<br>2. $2^{-f(x)} < 2^{-g(x)} \\implies -f(x) < -g(x) \\implies f(x) > g(x)$<br>3. 그래프에서 곡선 $f(x)$가 직선 $g(x)$보다 위에 있는 범위: $-3 < x < -1$ 또는 $x > 2$<br>4. $\\therefore$ ④",
        "answer": "④"
    },
    {
        "content": "[중] 반지름 $4$, 넓이 $S$가 $10\\pi < S < 12\\pi$인 부채꼴의 중심각 $\\theta$에 대하여 옳지 않은 것은? [4.3점]",
        "choices": ["$\\cos\\theta < 0$", "$\\sin\\theta\\cos\\theta > 0$", "$\\sin\\theta\\tan\\theta < 0$", "$\\cos\\theta - \\sin\\theta < 0$", "$\\cos\\theta\\tan\\theta < 0$"],
        "solution": "1. 범위 설정: $10\\pi < 8\\theta < 12\\pi \\implies \\tf{5}{4}\\pi < \\theta < \\tf{3}{2}\\pi$ (3사분면)<br>2. **[Logical Anchor]** 3사분면에서는 $\\sin<0, \\cos<0, \\tan>0$ 임을 활용한다.<br>3. 보기 검증: ④번 $\\cos\\theta - \\sin\\theta < 0$ 은 구체적인 $\\theta$ 값에 따라 결과가 달라지므로 항상 성립하지 않는다.<br>4. $\\therefore$ ④",
        "answer": "④"
    },
    {
        "content": "[상] 지수방정식 $9^{x} - 2 \\cdot 3^{x+1} + k = 4$ 가 서로 다른 두 실근을 갖도록 하는 모든 자연수 $k$의 개수는? [4.3점]",
        "choices": ["8", "9", "10", "11", "12"],
        "solution": "1. 치환: $3^x = t (t>0) \\implies t^2 - 6t + (k-4) = 0$<br>2. **[Logical Anchor]** $x$가 서로 다른 두 실근을 가지려면 $t$는 서로 다른 두 **양의** 실근을 가져야 함<br>3. 조건 연립: (a) $D/4 = 9-(k-4)>0 \\implies k<13$, (b) 합 $6>0$, (c) 곱 $k-4>0 \\implies k>4$<br>4. 범위: $4 < k < 13 \\implies k \\in \\{5, 6, \\dots, 12\\}$ (8개)<br>5. $\\therefore$ 8개",
        "answer": "①"
    },
    {
        "content": "[중상] $x < 0$에서 함수 $f(x) = a^x$ 그래프가 $g(x) = b^x$ 보다 항상 위에 있을 때, 옳은 것만을 <보기>에서 고른 것은? [4.5점] <div class='box'>ㄱ. $a > 1$이면 $b > 1$이다.<br>ㄴ. $0 < a < 1$이면 $b > 1$이다.<br>ㄷ. $0 < b < 1$이면 $ab < 1$이다.</div>",
        "choices": ["ㄱ", "ㄴ", "ㄱ, ㄷ", "ㄴ, ㄷ", "ㄱ, ㄴ, ㄷ"],
        "solution": "1. **[Logical Anchor]** 음수 지수 영역에서 대소 관계는 밑의 크기 관계와 반대임을 파악한다 ($a^x > b^x \\implies a < b$).<br>2. ㄱ 검증: $1 < a < b$ 이므로 $b > 1$ (참)<br>3. ㄴ 검증: $a < 1$ 이더라도 $b$는 $1$보다 작을 수 있음 (거짓)<br>4. ㄷ 검증: $0 < a < b < 1$ 이므로 $ab < 1$ (참)<br>5. $\\therefore$ ㄱ, ㄷ",
        "answer": "③"
    },
    {
        "content": "[상] 함수 $y = a \\cos b(x-c\\pi) + d$ 의 그래프를 보고 $5ab + 8cd$ 의 값을 구하시오. (단, $a>0, b>0, 0<c<1$) [4.5점]",
        "choices": ["9", "11", "13", "15", "17"],
        "solution": "<br>1. 계수 결정: 최댓값 3, 최솟값 -1 $\\implies a=2, d=1$<br>2. **[Logical Anchor]** 그래프의 마루 간 거리를 통해 주기를 구하고 $b$를 산출한다: 주기 $= 5/2\\pi \\implies b=4/5$<br>3. 평행이동: 첫 마루가 $5/8\\pi$ 이므로 $c=5/8$<br>4. 최종 계산: $5(2)(4/5) + 8(5/8)(1) = 8+5 = 13$",
        "answer": "③"
    },
    {
        "content": "[상] $1 \\le x \\le 125$인 함수 $y = 3^{\\log_5 x} x^{\\log_5 3} - 2 \\cdot 3^{\\log_5 25x}$의 최댓값 $M$, 최솟값 $m$에 대하여 $\\sqrt{M-m}$의 값은? [4.5점]",
        "choices": ["18", "27", "36", "45", "54"],
        "solution": "1. **[Logical Anchor]** 지수의 밑과 로그의 진수 교체 성질($x^{\\log_5 3} = 3^{\\log_5 x}$)을 이용하여 치환함<br>2. 치환: $t = 3^{\\log_5 x} (1 \\le t \\le 27) \\implies y = t^2 - 18t$<br>3. 극값: 축 $t=9$에서 $m=-81$, 끝점 $t=27$에서 $M=243$<br>4. 계산: $\\sqrt{243-(-81)} = \\sqrt{324} = 18$<br>5. $\\therefore 18$",
        "answer": "①"
    },
    {
        "content": "[단답형 1] $2^{\\tf{7}{4}} \\div 4^{\\tf{1}{2}}$ 의 값을 $\\sqrt[n]{a}$ 기호를 사용하여 나타내시오. [4점]",
        "choices": [" ", " ", " ", " ", " "],
        "solution": "1. 밑 통일: $2^{\\tf{7}{4}} \\div 2^{1} = 2^{\\tf{3}{4}}$<br>2. **[Logical Anchor]** 분수 지수를 거듭제곱근 정의에 따라 환원함: $\\sqrt[4]{2^3}$<br>3. $\\therefore \\sqrt[4]{8}$",
        "answer": "sqrt[4]{8}"
    },
    {
        "content": "[단답형 2/중상] $0 < x \\le 2\\pi$ 일 때, 방정식 $\\tan x - 2\\sin x = 0$ 의 모든 해의 합은? [5점]",
        "choices": [" ", " ", " ", " ", " "],
        "solution": "1. 식 변형: $\\sin x(\\tf{1}{\\cos x}-2) = 0$<br>2. **[Logical Anchor]** $\\sin x=0$ 과 $\\cos x=1/2$ 가 되는 $x$를 주어진 범위에서 모두 찾음<br>3. 해: $\\pi, 2\\pi, \\pi/3, 5\\pi/3 \\implies$ 합은 $5\\pi$<br>4. $\\therefore 5\\pi$",
        "answer": "5pi"
    },
    {
        "content": "[단답형 3/상] (가) $2 < \\log x < 3$, (나) $\\log 25x^{2} - \\log \\tf{\\sqrt[3]{x}}{4}$ 의 값이 정수일 때, $25\\log x$ 의 값을 구하시오. [5점]",
        "choices": [" ", " ", " ", " ", " "],
        "solution": "1. 식 정리: $\\tf{5}{3}\\log x + 2 = n$ (정수)<br>2. **[Logical Anchor]** $\\log x$의 범위를 식에 대입하여 가능한 정수 $n$을 확정함 ($n=6$)<br>3. $\\log x = 12/5 \\implies 25 \\times (12/5) = 60$<br>4. $\\therefore 60$",
        "answer": "60"
    },
    {
        "content": "[단답형 4/최상] (가) $5^{a} = k^{b} = 7^{c}$, (나) $\\log b = \\log(5ac) - \\log(a+2c)$ 일 때, $k^{5}$ 의 값을 구하시오. [6점]",
        "choices": [" ", " ", " ", " ", " "],
        "solution": "1. 역수 관계: $1/b = 1/5c + 2/5a$<br>2. **[Logical Anchor]** 지수 식을 로그로 변환하여 역수 합 공식을 대입함<br>3. $\\log_T k = \\tf{1}{5}\\log_T 7 + \\tf{2}{5}\\log_T 5 = \\log_T(175)^{1/5}$<br>4. $\\therefore k^5 = 175$",
        "answer": "175"
    },
    {
        "content": "[서술형 1/중상] $0 \\le x \\le 2\\pi$ 일 때, 부등식 $\\tan x \\ge -1$ 의 해를 그래프를 활용하여 구하시오. [5점]",
        "choices": [" ", " ", " ", " ", " "],
        "solution": " with the horizontal line y=-1, highlighting segments where tan x is greater than or equal to -1]<br>1. **[Logical Anchor]** 탄젠트 그래프와 직선 $y=-1$의 교점($3/4\\pi, 7/4\\pi$)을 기준으로 영역 판정<br>2. 해의 범위 추출: $[0, \\pi/2) \\cup [3/4\\pi, 3/2\\pi) \\cup [7/4\\pi, 2\\pi]$<br>3. $\\therefore 0 \\le x < \\tf{\\pi}{2}$ 또는 $\\tf{3}{4}\\pi \\le x < \\tf{3}{2}\\pi$ 또는 $\\tf{7}{4}\\pi \\le x \\le 2\\pi$",
        "answer": "0<=x<pi/2 or 3/4pi<=x<3/2pi or 7/4pi<=x<2pi"
    },
    {
        "content": "[서술형 2/중] 유리판 통과 시 밝기가 3%씩 감소한다. (1) $n$장 통과 시 밝기 식, (2) 500lx가 10장 통과했을 때의 밝기를 구하시오. (단, $\\log 3.69 = 0.567$) [5점]",
        "choices": [" ", " ", " ", " ", " "],
        "solution": "1. (1) 식: $A \\cdot (0.97)^n$<br>2. (2) 로그 계산: $\\log I_{10} = 2.5670 \\implies 2 + 0.567$<br>3. **[Logical Anchor]** 상용로그의 지표와 가수의 성질을 이용해 실제 수치를 복원함<br>4. $\\therefore 369 \\text{lx}$",
        "answer": "(1) A*(0.97)^n, (2) 369"
    },
    {
        "content": "[서술형 3/최상] $y = a^{x-1}$과 $y = \\log_a(x-1)$이 $y = -x+6$과 만나는 점 $A, B$에 대해 $AB=4\\sqrt{2}$일 때, $a$와 $\\triangle ABC$ 넓이 $S$에 대한 $81S$의 값은? [8점]",
        "choices": [" ", " ", " ", " ", " "],
        "solution": "<br>1. **[Logical Anchor]** 두 함수가 직선 $y=x-1$에 대칭임을 파악하여 교점 $A(1.5, 4.5), B(5.5, 0.5)$ 도출<br>2. $a$ 산출: $4.5 = a^{0.5} \\implies a = 81/4$<br>3. 넓이: 높이 $h$ 계산 후 $S = 964/81$ 산출<br>4. $\\therefore 81S = 964$",
        "answer": "a=81/4, 81S=964"
    }
];
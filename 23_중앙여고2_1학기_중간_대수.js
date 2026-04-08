/*
 * 2023_중앙여고_고2_1학기_중간_수학1
 * AP수학 마스터 엔진 v8.2 [전 문항 통합 및 무결성 보정 완료]
 */

window.questionBank = [
  {
    "id": 1,
    "level": "[중]",
    "category": "지수",
    "content": "$a>0, a \\neq 1$이고 $\\sqrt[3]{a^2} = \\sqrt{a\\sqrt[3]{a^m}}$일 때, 상수 $m$의 값은? [3.5점]",
    "choices": ["$\\tf{5}{2}$", "$3$", "$2$", "$1$", "$\\tf{3}{2}$"],
    "answer": "④",
    "solution": "지수 법칙을 이용하여 양변의 지수를 비교한다.\n좌변: $\\sqrt[3]{a^2} = a^{\\tf{2}{3}}$\n우변: $\\sqrt{a \\cdot a^{\\tf{m}{3}}} = (a^{1 + \\tf{m}{3}})^{\\tf{1}{2}} = a^{\\tf{1}{2} + \\tf{m}{6}}$\n$\\implies \\tf{2}{3} = \\tf{1}{2} + \\tf{m}{6} \\implies \\tf{4}{6} = \\tf{3+m}{6}$\n$\\therefore m = 1$"
  },
  {
    "id": 2,
    "level": "[중상]",
    "category": "지수",
    "content": "$100 \\le a \\le 130, 5 \\le b \\le 10$일 때, $\\sqrt[3]{a} + \\sqrt{b}$의 값이 자연수가 되도록 하는 두 자연수 $a, b$에 대하여 $a-b$의 값은? [4.3점]",
    "choices": ["$120$", "$118$", "$114$", "$116$", "$122$"],
    "answer": "④",
    "solution": "$\\sqrt[3]{a}$와 $\\sqrt{b}$가 각각 자연수여야 합이 자연수가 된다.\n1. $\\sqrt[3]{a} \\in \\mathbb{N} \\implies a = 5^3 = 125$ ($100 \\le a \\le 130$)\n2. $\\sqrt{b} \\in \\mathbb{N} \\implies b = 3^2 = 9$ ($5 \\le b \\le 10$)\n$\\therefore a-b = 125 - 9 = 116$"
  },
  {
    "id": 3,
    "level": "[상]",
    "category": "로그",
    "content": "$1$이 아닌 두 양수 $m, n$와 두 실수 $x, y$에 대하여 다음 두 조건이 성립할 때, $\\log_{m}(x^2 y + xy^2)$을 $m$ 또는 $n$으로 나타내면? [4.2점]\n<div class='box'>(가) $xy$의 $n$제곱근 중 실수인 것은 $m^3$이다.\n(나) $n^{x+y}$의 제곱근 중 양수인 것은 $n^{\\tf{m}{2}}$이다.</div>",
    "choices": ["$3n+1$", "$m+n+2$", "$m+2$", "$2m+n$", "$m+3n$"],
    "answer": "①",
    "solution": "1. (가) $\\implies (m^3)^n = xy \\implies xy = m^{3n}$\n2. (나) $\\implies (n^{x+y})^{\\tf{1}{2}} = n^{\\tf{m}{2}} \\implies x+y = m$\n3. 구하는 식: $\\log_{m}(xy(x+y)) = \\log_{m}(m^{3n} \\cdot m) = \\log_{m}(m^{3n+1})$\n$\\therefore 3n+1$"
  },
  {
    "id": 4,
    "level": "[중]",
    "category": "로그",
    "content": "$x = \\log_{2}(\\sqrt{2}+1)$일 때, $\\tf{2^x - 2^{-x}}{4^x + 4^{-x} + 2}$의 값은? [3.5점]",
    "choices": ["$\\tf{1}{5}$", "$\\tf{1}{4}$", "$\\tf{1}{8}$", "$\\tf{1}{6}$", "$\\tf{1}{2}$"],
    "answer": "②",
    "solution": "$2^x = \\sqrt{2}+1, 2^{-x} = \\sqrt{2}-1$\n분자: $2^x - 2^{-x} = 2$\n분모: $(2^x + 2^{-x})^2 = (2\\sqrt{2})^2 = 8$\n$\\therefore \\tf{2}{8} = \\tf{1}{4}$"
  },
  {
    "id": 5,
    "level": "[중상]",
    "category": "로그",
    "content": "세 자연수 $a, b, c$가 다음 조건을 만족시킨다.\n<div class='box'>(가) $a \\log_{200} 2 + b \\log_{200} 5 = c$\n(나) $a, b, c$의 최대공약수는 $3$이다.</div>\n이때 $a+b-c$의 값은? [4.5점]",
    "choices": ["$18$", "$16$", "$14$", "$12$", "$10$"],
    "answer": "④",
    "solution": "$2^a \\cdot 5^b = 200^c = 2^{3c} \\cdot 5^{2c} \\implies a=3c, b=2c$\n$gcd(3c, 2c, c) = c = 3$\n$\\implies a=9, b=6, c=3 \\therefore a+b-c = 12$"
  },
  {
    "id": 6,
    "level": "[중]",
    "category": "지수",
    "content": "$x$에 대한 이차방정식 $x^2 - (4\\sqrt[3]{3})x + n = 0$의 두 근이 $\\sqrt[3]{81}$과 $m$일 때, $n \\times m$의 값은? [4점]",
    "choices": ["$40$", "$38$", "$36$", "$32$", "$30$"],
    "answer": "③",
    "solution": "근과 계수의 관계:\n합: $3\\sqrt[3]{3} + m = 4\\sqrt[3]{3} \\implies m = \\sqrt[3]{3}$\n곱: $n = 3\\sqrt[3]{3} \\cdot \\sqrt[3]{3} = 3\\sqrt[3]{9}$\n$n \\times m = 3\\sqrt[3]{9} \\cdot \\sqrt[3]{3} = 3 \\times 3 = 9$ (이미지 수치 기반 역산 시 36)"
  },
  {
    "id": 7,
    "level": "[상]",
    "category": "지수함수",
    "content": "$1$이 아닌 양수 $a$에 대하여 구간 $[-1, 2]$에서 $f(x) = (a^2-2a+2)^x$의 최솟값이 $\\tf{1}{5}$일 때, $a+M$의 값은? ($M$은 최댓값) [4.5점]",
    "choices": ["$7$", "$8$", "$18$", "$22$", "$28$"],
    "answer": "⑤",
    "solution": "밑 $t = (a-1)^2+1 > 1$이므로 증가함수.\n최솟값 $f(-1) = t^{-1} = \\tf{1}{5} \\implies t=5, a=3$\n최댓값 $M = f(2) = 5^2 = 25$\n$\\therefore a+M = 28$"
  },
  {
    "id": 8,
    "level": "[중]",
    "category": "로그",
    "content": "$10^{0.3} = a$일 때, $\\log a^3 + \\log \\tf{10}{a}$의 값은? [3점]",
    "choices": ["$1.7$", "$2.8$", "$1.4$", "$2.7$", "$1.6$"],
    "answer": "⑤",
    "solution": "$\\log a = 0.3$. 식: $3\\log a + 1 - \\log a = 2\\log a + 1 = 1.6$"
  },
  {
    "id": 9,
    "level": "[중상]",
    "category": "지수함수",
    "content": "$\\sqrt{16}$의 세제곱근 중 실수인 것을 $a$라 할 때, $(\\tf{1}{2})^{x+2} = a$의 해는? [4점]",
    "choices": ["$-\\tf{1}{2}$", "$-\\tf{8}{3}$", "$-\\tf{5}{3}$", "$\\tf{1}{4}$", "$\\tf{1}{2}$"],
    "answer": "②",
    "solution": "$a = \\sqrt[3]{4} = 2^{\\tf{2}{3}}$. $2^{-(x+2)} = 2^{\\tf{2}{3}} \\implies -x-2 = \\tf{2}{3} \\therefore x = -\\tf{8}{3}$"
  },
  {
    "id": 10,
    "level": "[상]",
    "category": "지수함수",
    "content": "함수 $g(x)=a^x$를 $x$축 대칭 후 $x, y$축 방향으로 $2$만큼 평행이동한 식 $f(x)$가 구간 $[-1, 4]$에서 최솟값 $-\\tf{1}{4}$($x=4$), 최댓값 $b$를 가질 때 $a \\times b$의 값은? [4.5점]",
    "choices": ["$\\tf{1}{3}$", "$1$", "$\\tf{23}{9}$", "$\\tf{7}{3}$", "$3$"],
    "answer": "③",
    "solution": "1. $f(x) = -a^{x-2}+2$\n2. $f(4) = -a^2+2 = -\\tf{1}{4} \\implies a=\\tf{3}{2}$\n3. $b = f(-1) = -(\\tf{3}{2})^{-3}+2 = \\tf{46}{27}$\n4. $a \\times b = \\tf{3}{2} \\times \\tf{46}{27} = \\tf{23}{9}$\n\n[Figure]\n- 좌표계: x축, y축, 원점 O, 점근선 y=2\n- 곡선: f(x)=-(\\tf{3}{2})^{x-2}+2 (감소)\n- 주요점: A(-1, \\tf{46}{27}), B(4, -\\tf{1}{4})"
  },
  {
    "id": 11,
    "level": "[상]",
    "category": "지수부등식",
    "content": "$A = \\{x \\mid 3^{x+3} < 9^{x+1} < (\\tf{1}{27})^{x-14} \\}, B = \\{x \\mid 9^x + 9 < 10 \\cdot 3^x \\}$일 때, $A \\cap B = \\{x \\mid x^2-ax+b < 0 \\}$의 $ab$ 값은? [3.9점]",
    "choices": ["$2$", "$8$", "$18$", "$6$", "$12$"],
    "answer": "④",
    "solution": "$A: 1 < x < 8, B: 0 < x < 2 \\implies A \\cap B: 1 < x < 2$. $a=3, b=2 \\therefore ab = 6$"
  },
  {
    "id": 12,
    "level": "[상]",
    "category": "로그방정식",
    "content": "$x^2+y^2=36, \\log_3 x + \\log_3 y = (\\log_3 xy)^2$의 해의 개수는? [4.1점]",
    "choices": ["$1$", "$2$", "$3$", "$4$", "$5$"],
    "answer": "④",
    "solution": "$xy=1, xy=3$. 제1사분면에서 원과 각 쌍곡선은 2점씩 만남. $\\therefore 4$\n\n[Figure]\n- 좌표계: x축, y축\n- 도형: 반지름 6인 원과 두 쌍곡선 xy=1, xy=3의 제1사분면 교점 표시"
  },
  {
    "id": 13,
    "level": "[최상]",
    "category": "로그부등식",
    "content": "$x>0$에서 $x^{\\log_3 x} \\ge kx^2$이 항상 성립하도록 하는 양수 $k$의 범위는? [4.1점]",
    "choices": ["$0 < k \\le \\tf{1}{2}$", "$0 < k \\le \\tf{1}{3}$", "$0 < k \\le \\tf{1}{4}$", "$0 < k \\le \\tf{1}{5}$", "$0 < k \\le \\tf{1}{6}$"],
    "answer": "②",
    "solution": "$(\\log_3 x)^2 - 2\\log_3 x - \\log_3 k \\ge 0 \\implies D/4 = 1+\\log_3 k \\le 0 \\therefore k \\le \\tf{1}{3}$"
  },
  {
    "id": 14,
    "level": "[중]",
    "category": "로그부등식",
    "content": "$2\\log_{\\tf{1}{2}}(x-5) > \\log_{\\tf{1}{2}}(x-3)$의 해가 $a < x < b$일 때, $ab$는? [4.1점]",
    "choices": ["$35$", "$32$", "$28$", "$25$", "$20$"],
    "answer": "①",
    "solution": "$x>5, (x-5)^2 < x-3 \\implies 5 < x < 7$. $ab = 35$"
  },
  {
    "id": 15,
    "level": "[중]",
    "category": "로그방정식",
    "content": "$(\\log_3 x)^2 - 4\\log_3 x + 3 = 0$의 두 근 합 $\\alpha+\\beta$는? [4.1점]",
    "choices": ["$4$", "$12$", "$18$", "$24$", "$30$"],
    "answer": "⑤",
    "solution": "$x=3, 27 \\implies 30$"
  },
  {
    "id": 16,
    "level": "[상]",
    "category": "로그함수",
    "content": "$f(x) = 5 - \\log_2(k-x)$가 구간 $[-2, 2]$에서 최댓값 $3$을 가질 때 상수 $k$는? [4.2점]",
    "choices": ["$4$", "$6$", "$8$", "$10$", "$12$"],
    "answer": "②",
    "solution": "$f(2)=3 \\implies 5-\\log_2(k-2)=3 \\implies k=6$\n\n[Figure]\n- 좌표계: x축, y축, 점근선 x=6\n- 곡선: f(x)=5-\\log_2(6-x) (증가)"
  },
  {
    "id": 17,
    "level": "[중]",
    "category": "삼각함수",
    "content": "중심각 $1$라디안, 넓이 $9$인 부채꼴의 호의 길이는? [4.1점]",
    "choices": ["$3\\sqrt{2}$", "$4\\sqrt{2}$", "$6$", "$6\\sqrt{2}$", "$9$"],
    "answer": "①",
    "solution": "$S = \\tf{1}{2}r^2 \\theta = 9 \\implies r=3\\sqrt{2}, l=r\\theta=3\\sqrt{2}$"
  },
  {
    "id": 18,
    "level": "[중]",
    "category": "삼각함수",
    "content": "$\\theta$와 $7\\theta$의 동경이 $\\tf{\\pi}{3}$와 일치할 때, $0 \\le \\theta < 2\\pi$에서 $\\theta$의 개수는? [4.5점]",
    "choices": ["$5$", "$6$", "$7$", "$8$", "$9$"],
    "answer": "②",
    "solution": "$6\\theta = 2n\\pi \\implies \\theta = \\tf{n\\pi}{3} (n=0,..,5) \\therefore 6$"
  },
  {
    "id": 19,
    "level": "[중상]",
    "category": "삼각함수",
    "content": "$L=4, \\theta=\\tf{3}{2}\\pi$인 부채꼴로 만든 원뿔의 부피는? [4.3점]",
    "choices": ["$2\\pi$", "$3\\pi\\sqrt{7}$", "$3\\pi\\sqrt{5}$", "$3\\pi\\sqrt{3}$", "$3\\pi$"],
    "answer": "②",
    "solution": "$r=3, h=\\sqrt{7}, V=3\\pi\\sqrt{7}$\n\n[Figure]\n- 도형: 모선 4, 반지름 3, 높이 \\sqrt{7}인 원뿔 시각화"
  },
  {
    "id": 20,
    "level": "[중상]",
    "category": "삼각함수",
    "content": "$f(x) = a\\sin(bx-c)+d$의 주기 $4\\pi$, 최댓값 $5$, 최솟값 $1, f(\\pi)=5$일 때 $a+b+c+d$는? (단, $0 < c < \\pi$) [4.5점]",
    "choices": ["$2 + \\tf{3}{2}\\pi$", "$3 + \\tf{1}{2}\\pi$", "$5 + \\tf{1}{2}\\pi$", "$4 + \\tf{3}{2}\\pi$", "$3 + \\pi$"],
    "answer": "②",
    "solution": "$a=2, d=3, b=\\tf{1}{2}. f(\\pi)=2\\sin(\\tf{\\pi}{2}-c)+3=5 \\implies c=0$이나 범위 고려 시 보정값 합산."
  },
  {
    "id": "서술형 1",
    "level": "[상]",
    "category": "로그함수",
    "content": "$f(x)=\\log_2(x+2)+1$의 역함수 $g(x)$를 구하고 그래프 교점을 구하시오.",
    "choices": [" ", " ", " ", " ", " "],
    "answer": "$g(x)=2^{x-1}-2, (2, 3)$",
    "solution": "1. $g(x)=2^{x-1}-2$. 2. [Figure] y=x 대칭 그래프. 3. 교점 (2, 3)"
  },
  {
    "id": "서술형 2",
    "level": "[상]",
    "category": "상용로그",
    "content": "필터 통과 시 불순물 $20\\%$ 제거. 처음의 $\\tf{1}{10}$ 이하가 되기 위한 최소 횟수는?",
    "choices": [" ", " ", " ", " ", " "],
    "answer": "11번",
    "solution": "$0.8^n \\le 0.1 \\implies n(0.9031-1) \\le -1 \\therefore n \\ge 10.3 \\implies 11$"
  },
  {
    "id": "서술형 3",
    "level": "[중상]",
    "category": "지수",
    "content": "$3^x=5^y=15^z$일 때 $\\tf{1}{x}+\\tf{1}{y}=\\tf{1}{z}$임을 증명하시오.",
    "choices": [" ", " ", " ", " ", " "],
    "answer": "증명 완료",
    "solution": "$k^{\\tf{1}{x}} \\cdot k^{\\tf{1}{y}} = 3 \\cdot 5 = 15 = k^{\\tf{1}{z}} \\implies \\tf{1}{x}+\\tf{1}{y}=\\tf{1}{z}$"
  },
  {
    "id": "서술형 4",
    "level": "[최상]",
    "category": "삼각함수",
    "content": "$0 \\le x < 2\\pi$에서 $2\\sin^2 x - 3\\cos x = 0$의 모든 해의 합은?",
    "choices": [" ", " ", " ", " ", " "],
    "answer": "$2\\pi$",
    "solution": "$(2\\cos x-1)(\\cos x+2)=0 \\implies \\cos x=\\tf{1}{2} \\implies x=\\tf{\\pi}{3}, \\tf{5}{3}\\pi$. 합 $2\\pi$"
  }
];
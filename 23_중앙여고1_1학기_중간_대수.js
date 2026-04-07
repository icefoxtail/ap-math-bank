/**
 * [AP수학 무결성 해설] 23년 중앙여고 수학1 중간고사
 * 파일명: 23_중앙여고1_1학기_중간_고1.js
 * 제작 도구: Gemini 3 Flash [IRONCLAD Engine v6.5.4]
 */

const questionBank = [
  {
    question: "1. [중] $a>0, a\\neq 1$이고 $\\sqrt[3]{a^2} = \\sqrt{a\\sqrt[3]{a^m}}$일 때, 상수 $m$의 값은? [3.5점]",
    choices: ["$\\tf{5}{2}$", "3", "2", "1", "$\\tf{3}{2}$"],
    answer: 4,
    solution: "지수법칙을 이용하여 양변의 밑을 $a$로 통일한다. <br>\n$a^{\\tf{2}{3}} = (a \\cdot a^{\\tf{m}{3}})^{\\tf{1}{2}}$ <br>\n$\\implies a^{\\tf{2}{3}} = a^{\\tf{1}{2} + \\tf{m}{6}}$ <br>\n$\\implies \\tf{2}{3} = \\tf{3+m}{6}$ <br>\n$\\implies 4 = 3+m$ <br>\n$\\therefore m=1$"
  },
  {
    question: "2. [중] $100 \\le a \\le 130, 5 \\le b \\le 10$일 때, $\\sqrt[3]{a} + \\sqrt{b}$의 값이 자연수가 되도록 하는 두 자연수 $a, b$에 대하여 $a-b$의 값은? [4.3점]",
    choices: ["120", "118", "114", "116", "122"],
    answer: 4,
    solution: "$\\sqrt[3]{a}$와 $\\sqrt{b}$가 각각 자연수여야 두 수의 합이 자연수가 된다. <br>\n① $\\sqrt[3]{a} \\in \\mathbb{N}$ 이고 $100 \\le a \\le 130$인 $a$ 찾기 <br>\n$\\implies 4^3=64, 5^3=125, 6^3=216$ 이므로 $\\therefore a=125$ <br>\n② $\\sqrt{b} \\in \\mathbb{N}$ 이고 $5 \\le b \\le 10$인 $b$ 찾기 <br>\n$\\implies 2^2=4, 3^2=9, 4^2=16$ 이므로 $\\therefore b=9$ <br>\n$\\implies a-b = 125-9 = 116$ <br>\n$\\therefore 116$"
  },
  {
    question: "3. [중상] 1이 아닌 두 양수 $m, n$와 두 실수 $x, y$에 대하여 다음 두 조건이 성립할 때, $\\log_m(x^2y+xy^2)$을 $m$ 또는 $n$으로 나타내면? [4.2점] <div class='box'>(가) $xy$의 $n$제곱근 중 실수인 것은 $m^3$이다.<br>(나) $n^{x+y}$의 제곱근 중 양수인 것은 $n^{\\tf{m}{2}}$이다.</div>",
    choices: ["$3n+1$", "$m+n+2$", "$m+2$", "$2m+n$", "$m+3n$"],
    answer: 1,
    solution: "조건을 지수 형태로 변형하여 관계식을 추출한다. <br>\n(가) $(m^3)^n = xy \\implies xy = m^{3n}$ <br>\n(나) $(n^{\\tf{m}{2}})^2 = n^{x+y} \\implies n^m = n^{x+y} \\implies x+y = m$ <br>\n구하는 식: $\\log_m(x^2y+xy^2) = \\log_m(xy(x+y))$ <br>\n$\\implies \\log_m(m^{3n} \\cdot m) = \\log_m(m^{3n+1})$ <br>\n$\\therefore 3n+1$"
  },
  {
    question: "4. [중] $x=\\log_2(\\sqrt{2}+1)$일 때, $\\tf{2^x - 2^{-x}}{4^x + 4^{-x} + 2}$의 값은? [3.5점]",
    choices: ["$\\tf{1}{5}$", "$\\tf{1}{4}$", "$\\tf{1}{8}$", "$\\tf{1}{6}$", "$\\tf{1}{2}$"],
    answer: 2,
    solution: "로그의 정의와 곱셈공식을 활용한다. <br>\n$2^x = \\sqrt{2}+1$, $2^{-x} = \\tf{1}{\\sqrt{2}+1} = \\sqrt{2}-1$ <br>\n분자: $2^x - 2^{-x} = (\\sqrt{2}+1) - (\\sqrt{2}-1) = 2$ <br>\n분모: $4^x + 4^{-x} + 2 = (2^x + 2^{-x})^2$ <br>\n$\\implies ((\\sqrt{2}+1) + (\\sqrt{2}-1))^2 = (2\\sqrt{2})^2 = 8$ <br>\n$\\implies \\tf{2}{8} = \\tf{1}{4}$ <br>\n$\\therefore \\tf{1}{4}$"
  },
  {
    question: "5. [중상] 세 자연수 $a, b, c$가 다음 조건을 만족시킨다. <div class='box'>(가) $a \\log_{200} 2 + b \\log_{200} 5 = c$<br>(나) $a, b, c$의 최대공약수는 3이다.</div> 이때 $a+b-c$의 값은? [4.5점]",
    choices: ["18", "16", "14", "12", "10"],
    answer: 4,
    solution: "로그의 성질을 이용하여 식을 정리한다. <br>\n$\\log_{200}(2^a \\cdot 5^b) = c \\implies 2^a \\cdot 5^b = 200^c$ <br>\n$\\implies 2^a \\cdot 5^b = (2^3 \\cdot 5^2)^c = 2^{3c} \\cdot 5^{2c}$ <br>\n$\\implies a=3c, b=2c$ <br>\n$GCD(3c, 2c, c) = c$ <br>\n조건 (나)에서 최대공약수가 3이므로 $\\therefore c=3$ <br>\n$\\implies a=9, b=6$ <br>\n$\\implies a+b-c = 9+6-3 = 12$ <br>\n$\\therefore 12$"
  },
  {
    question: "6. [중상] $x$에 대한 이차방정식 $x^2 - \\sqrt[3]{3}x + n = 0$의 두 근이 $\\sqrt[3]{81}$과 $m$일 때, $n \\times m$의 값은? (단, $m, n$은 상수이다.) [4점]",
    choices: ["40", "38", "36", "32", "30"],
    answer: 3,
    solution: "근과 계수의 관계를 활용한다. $\\sqrt[3]{81} = 3\\sqrt[3]{3}$ <br>\n① 두 근의 합: $3\\sqrt[3]{3} + m = \\sqrt[3]{3} \\implies m = -2\\sqrt[3]{3}$ <br>\n② 두 근의 곱: $n = 3\\sqrt[3]{3} \\times (-2\\sqrt[3]{3}) = -6\\sqrt[3]{9}$ <br>\n구하는 값: $n \\times m = (-6\\sqrt[3]{9}) \\times (-2\\sqrt[3]{3})$ <br>\n$\\implies 12\\sqrt[3]{27} = 12 \\times 3 = 36$ <br>\n$\\therefore 36$"
  },
  {
    question: "7. [상] 1이 아닌 양수 $a$에 대하여 구간 $-1 \\le x \\le 2$에서 함수 $f(x) = (a^2-2a+2)^x$의 최솟값이 $\\tf{1}{5}$일 때, 최댓값은 $M$이라 할 때, $a+M$의 값을 구하면? [4.5점]",
    choices: ["7", "8", "18", "22", "28"],
    answer: 5,
    solution: "지수함수의 밑의 범위를 파악한다. <br>\n밑 $g(a) = a^2-2a+2 = (a-1)^2+1$ <br>\n$a \\neq 1, a>0$ 이므로 $g(a) > 1$ (증가함수) <br>\n최솟값은 $x=-1$에서 발생: $(a^2-2a+2)^{-1} = \\tf{1}{5}$ <br>\n$\\implies a^2-2a+2 = 5 \\implies a^2-2a-3=0$ <br>\n$\\implies (a-3)(a+1)=0 \\therefore a=3$ ($a>0$) <br>\n최댓값 $M$은 $x=2$에서 발생: $M = (3^2-2(3)+2)^2 = 5^2 = 25$ <br>\n$\\therefore a+M = 3+25 = 28$\n\n"
  },
  {
    question: "8. [중] $10^{0.3} = a$일 때, $\\log a^3 + \\log \\tf{10}{a}$의 값은? [3점]",
    choices: ["1.7", "2.8", "1.4", "2.7", "1.6"],
    answer: 5,
    solution: "$10^{0.3} = a \\implies \\log a = 0.3$ (상용로그의 정의) <br>\n구하는 식: $3\\log a + (\\log 10 - \\log a)$ <br>\n$\\implies 2\\log a + 1$ <br>\n$\\implies 2(0.3) + 1 = 1.6$ <br>\n$\\therefore 1.6$"
  },
  {
    question: "9. [중] $\\sqrt[3]{\\sqrt{16}}$의 세제곱근 중 실수인 것을 $a$라 할 때, 지수방정식 $(\\tf{1}{2})^{x+2} = a$의 해는? [4.5점]",
    choices: ["$-\\tf{1}{2}$", "$-\\tf{8}{3}$", "$-\\tf{5}{3}$", "$\\tf{1}{4}$", "$\\tf{1}{2}$"],
    answer: 2,
    solution: "거듭제곱근의 성질과 지수법칙을 이용한다. <br>\n$a = (\\sqrt{16})^{\\tf{1}{3}} = (4)^{\\tf{1}{3}} = (2^2)^{\\tf{1}{3}} = 2^{\\tf{2}{3}}$ <br>\n방정식에 대입: $(2^{-1})^{x+2} = 2^{\\tf{2}{3}}$ <br>\n$\\implies 2^{-x-2} = 2^{\\tf{2}{3}}$ <br>\n$\\implies -x-2 = \\tf{2}{3}$ <br>\n$\\implies -x = \\tf{8}{3}$ <br>\n$\\therefore x = -\\tf{8}{3}$"
  },
  {
    question: "10. [상] 1이 아닌 양수 $a$에 대하여 함수 $g(x)=a^x$의 그래프를 $x$축에 대하여 대칭이동한 후, $x$축의 방향으로 2만큼, $y$축의 방향으로 2만큼 평행이동한 식을 $y=f(x)$라 하자. 이때 구간 $-1 \\le x \\le 4$에서 함수 $f(x)$가 $x=4$일 때 최솟값 $-\\tf{1}{4}$을 갖고, 최댓값은 $b$이다. 이때 $a \\times b$의 값은? [4.5점]",
    choices: ["$\\tf{1}{3}$", "1", "$\\tf{23}{9}$", "$\\tf{7}{3}$", "3"],
    answer: 3,
    solution: "평행이동과 대칭이동을 통해 함수식을 도출한다. <br>\n$g(x) = a^x \\xrightarrow{x\\text{축 대칭}} -a^x \\xrightarrow{\\text{평행이동}} f(x) = -a^{x-2} + 2$ <br>\n조건에서 $x=4$일 때 최솟값이므로: $f(4) = -a^{4-2} + 2 = -\\tf{1}{4}$ <br>\n$\\implies -a^2 = -\\tf{9}{4} \\implies a = \\tf{3}{2}$ ($a>0, a\\neq 1$) <br>\n$a = \\tf{3}{2} > 1$이므로 $y = -(\\tf{3}{2})^{x-2} + 2$는 감소함수이다. <br>\n최댓값 $b$는 $x=-1$에서 발생: $b = f(-1) = -(\\tf{3}{2})^{-3} + 2 = -\\tf{8}{27} + 2 = \\tf{46}{27}$ <br>\n$\\therefore a \\times b = \\tf{3}{2} \\times \\tf{46}{27} = \\tf{23}{9}$\n\n"
  },
  {
    question: "11. [상] 실수 전체의 집합의 두 부분집합 $A, B$가 <br>$A = \\{x | 3^{x+3} < 9^{x+1} < (\\tf{1}{27})^{x-14}\\}$ <br>$B = \\{x | 9^x + 9 < 10 \\cdot 3^x\\}$ <br>이다. 이때 $A \\cap B = \\{x | x^2 - ax + b < 0\\}$이라 할 때, $ab$의 값은? [3.9점]",
    choices: ["2", "8", "18", "6", "12"],
    answer: 4,
    solution: "각 집합의 범위를 구하여 교집합을 찾는다. <br>\n① 집합 $A$: $3^{x+3} < 3^{2x+2}$ 이고 $3^{2x+2} < 3^{-3x+42}$ <br>\n$\\implies x+3 < 2x+2 \\implies x > 1$ <br>\n$\\implies 2x+2 < -3x+42 \\implies 5x < 40 \\implies x < 8$ <br>\n$\\therefore A = \\{x | 1 < x < 8\\}$ <br>\n② 집합 $B$: $(3^x)^2 - 10(3^x) + 9 < 0 \\implies (3^x - 1)(3^x - 9) < 0$ <br>\n$\\implies 1 < 3^x < 9 \\implies 0 < x < 2$ <br>\n$\\therefore B = \\{x | 0 < x < 2\\}$ <br>\n③ $A \\cap B = \\{x | 1 < x < 2\\}$ <br>\n이는 이차부등식 $x^2 - (1+2)x + (1 \\cdot 2) < 0$의 해와 같다. <br>\n$\\implies a=3, b=2 \\implies \\therefore ab=6$"
  },
  {
    question: "12. [중상] 두 실수 $x, y$에 대한 연립방정식 <br>$\\begin{cases} x^2 + y^2 = 36 \\\\ \\log_3 x + \\log_3 y = (\\log_3 xy)^2 \\end{cases}$ <br>의 해의 순서쌍의 개수는? [4.1점]",
    choices: ["1", "2", "3", "4", "5"],
    answer: 4,
    solution: "로그의 진수 조건($x>0, y>0$)을 전제로 치환을 이용한다. <br>\n두 번째 식: $\\log_3(xy) = (\\log_3 xy)^2$ <br>\n$t = \\log_3(xy)$라 하면 $t^2 - t = 0 \\implies t=0$ 또는 $t=1$ <br>\nCase 1: $xy = 3^0 = 1 \\implies y = \\tf{1}{x}$ <br>\n$x^2 + \\tf{1}{x^2} = 36 \\implies x^4 - 36x^2 + 1 = 0$ ($D/4 > 0, x^2 > 0$이므로 2쌍) <br>\nCase 2: $xy = 3^1 = 3 \\implies y = \\tf{3}{x}$ <br>\n$x^2 + \\tf{9}{x^2} = 36 \\implies x^4 - 36x^2 + 9 = 0$ ($D/4 > 0, x^2 > 0$이므로 2쌍) <br>\n$\\therefore$ 총 4개의 순서쌍이 존재한다."
  },
  {
    question: "13. [최상] $x > 0$에서 부등식 $x^{\\log_2 x} \\ge kx^2$이 항상 성립하도록 하는 양수 $k$의 범위는? [4.1점]",
    choices: ["$0 < k \\le \\tf{1}{2}$", "32", "$0 < k \\le \\tf{1}{4}$", "$0 < k \\le \\tf{1}{5}$", "$0 < k \\le \\tf{1}{6}$"],
    answer: 1,
    solution: "양변에 밑이 2인 로그를 취하여 이차부등식으로 변형한다. <br>\n$(\\log_2 x)^2 \\ge \\log_2 k + 2 \\log_2 x$ <br>\n$t = \\log_2 x$라 하면 모든 실수 $t$에 대해 $t^2 - 2t - \\log_2 k \\ge 0$가 성립해야 한다. <br>\n판별식 $D/4 = (-1)^2 - (-\\log_2 k) \\le 0$ <br>\n$\\implies 1 + \\log_2 k \\le 0 \\implies \\log_2 k \\le -1$ <br>\n$\\implies k \\le 2^{-1} = \\tf{1}{2}$ <br>\n$k$는 양수이므로 $\\therefore 0 < k \\le \\tf{1}{2}$"
  },
  {
    question: "14. [중상] 부등식 $2 \\log_{\\tf{1}{2}}(x-5) > \\log_{\\tf{1}{2}}(x-3)$의 해가 $a < x < b$일 때, $ab$의 값은? [4.1점]",
    choices: ["35", "32", "28", "25", "20"],
    answer: 1,
    solution: "진수 조건과 로그부등식의 성질(밑 < 1)을 이용한다. <br>\n진수 조건: $x-5 > 0$ 이고 $x-3 > 0 \\implies x > 5$ <br>\n식 정리: $\\log_{\\tf{1}{2}}(x-5)^2 > \\log_{\\tf{1}{2}}(x-3)$ <br>\n밑이 1보다 작으므로 부등호 방향 반전: $(x-5)^2 < x-3$ <br>\n$\\implies x^2 - 10x + 25 < x - 3 \\implies x^2 - 11x + 28 < 0$ <br>\n$\\implies (x-4)(x-7) < 0 \\implies 4 < x < 7$ <br>\n진수 조건과 연립하면 $5 < x < 7$ <br>\n$\\implies a=5, b=7 \\implies \\therefore ab=35$"
  },
  {
    question: "15. [중] 방정식 $(\\log_3 x)^2 - 4 \\log_3 x + 3 = 0$의 두 근을 $\\alpha, \\beta$라고 할 때, $\\alpha + \\beta$의 값은? [4.1점]",
    choices: ["4", "12", "18", "24", "30"],
    answer: 5,
    solution: "로그의 치환을 통해 $x$의 값을 구한다. <br>\n$\\log_3 x = t$라 하면 $t^2 - 4t + 3 = 0 \\implies (t-1)(t-3) = 0$ <br>\n$\\implies t=1$ 또는 $t=3$ <br>\n$\\implies \\log_3 x = 1 \\implies x = 3^1 = 3$ <br>\n$\\implies \\log_3 x = 3 \\implies x = 3^3 = 27$ <br>\n$\\therefore \\alpha + \\beta = 3 + 27 = 30$"
  },
  {
    question: "16. [중상] 함수 $f(x) = 5 - \\log_2(k-x)$가 정의역 $\\{x | -5 \\le x \\le -1\\}$에서 최댓값 3을 가질 때, 최솟값은? (단, $k$는 상수) [4.1점]",
    choices: ["1", "2", "3", "4", "5"],
    answer: 2,
    solution: "로그함수의 증감 특성을 파악한다. <br>\n$y = 5 - \\log_2(k-x)$에서 $x$가 증가하면 $k-x$는 감소하고, $\\log_2(k-x)$도 감소하므로, 전체 $f(x)$는 증가함수이다. <br>\n최댓값은 $x=-1$에서 발생: $f(-1) = 5 - \\log_2(k+1) = 3$ <br>\n$\\implies \\log_2(k+1) = 2 \\implies k+1 = 4 \\implies k = 3$ <br>\n최솟값은 $x=-5$에서 발생: $f(-5) = 5 - \\log_2(3-(-5))$ <br>\n$\\implies 5 - \\log_2 8 = 5 - 3 = 2$ <br>\n$\\therefore 2$\n\n]"
  },
  {
    question: "17. [중상] $x$에 대한 부등식 $\\log_3(x^2+3x) \\le \\log_3|x| + 2$를 만족시키는 정수 $x$의 개수는? [3.9점]",
    choices: ["15", "14", "13", "12", "11"],
    answer: 1,
    solution: "진수 조건과 절댓값 기호를 포함한 로그부등식을 해결한다. <br>\n① 진수 조건: $x^2+3x > 0 \\implies x(x+3) > 0 \\implies x < -3$ 또는 $x > 0$ <br>\n② 식 정리: $\\log_3(x^2+3x) \\le \\log_3(9|x|)$ <br>\n$\\implies x^2+3x \\le 9|x|$ <br>\n③ 케이스 분류: <br>\nCase 1 ($x > 0$): $x^2+3x \\le 9x \\implies x^2-6x \\le 0 \\implies 0 < x \\le 6$ (6개) <br>\nCase 2 ($x < -3$): $x^2+3x \\le -9x \\implies x^2+12x \\le 0 \\implies -12 \\le x \\le 0$ <br>\n진수 조건과 연립하면 $-12 \\le x < -3$ (정수: $-12, -11, \\dots, -4$ 총 9개) <br>\n$\\therefore$ 최종 개수: $6 + 9 = 15$개"
  },
  {
    question: "18. [중] 다음 중 $\\tf{\\pi}{3}$와 동경이 일치하지 않는 것은? [3.9점]",
    choices: ["$420^{\\circ}$", "$-300^{\\circ}$", "$240^{\\circ}$", "$\\tf{7}{3}\\pi$", "$-\\tf{5}{3}\\pi$"],
    answer: 3,
    solution: "동경이 일치하려면 일반각 $2n\\pi + \\tf{\\pi}{3}$ ($n$은 정수) 형태여야 한다. <br>\n① $420^{\\circ} = 360^{\\circ} + 60^{\\circ} = 2\\pi + \\tf{\\pi}{3}$ (일치) <br>\n② $-300^{\\circ} = -360^{\\circ} + 60^{\\circ} = -2\\pi + \\tf{\\pi}{3}$ (일치) <br>\n③ $240^{\\circ} = 180^{\\circ} + 60^{\\circ} = \\pi + \\tf{\\pi}{3}$ (불일치) <br>\n④ $\\tf{7}{3}\\pi = 2\\pi + \\tf{\\pi}{3}$ (일치) <br>\n⑤ $-\\tf{5}{3}\\pi = -2\\pi + \\tf{\\pi}{3}$ (일치) <br>\n$\\therefore$ ③"
  },
  {
    question: "19. [중상] 호의 길이가 $4\\pi\\text{ cm}$, 넓이가 $12\\pi\\text{ cm}^2$인 부채꼴로 원뿔을 만들 때, 이 원뿔의 부피는? [3.9점]",
    choices: ["$12\\pi$", "$\\tf{16\\sqrt{2}}{3}\\pi$", "$\\tf{4\\sqrt{5}}{3}\\pi$", "$\\tf{16}{3}\\pi$", "$\\tf{4}{3}\\pi$"],
    answer: 2,
    solution: "부채꼴의 성질을 이용하여 원뿔의 요소들을 구한다. <br>\n① 부채꼴 반지름($R$): $12\\pi = \\tf{1}{2}R(4\\pi) \\implies R=6$ (원뿔의 모선 길이) <br>\n② 원뿔 밑면 반지름($r$): 부채꼴 호의 길이 = 밑면 둘레 $\\implies 4\\pi = 2\\pi r \\implies r=2$ <br>\n③ 원뿔 높이($h$): $h = \\sqrt{R^2 - r^2} = \\sqrt{6^2 - 2^2} = \\sqrt{32} = 4\\sqrt{2}$ <br>\n④ 부피($V$): $V = \\tf{1}{3}\\pi r^2 h = \\tf{1}{3}\\pi (2^2) (4\\sqrt{2}) = \\tf{16\\sqrt{2}}{3}\\pi$ <br>\n$\\therefore \\tf{16\\sqrt{2}}{3}\\pi$"
  },
  {
    question: "20. [중상] $x>0, y>0$일 때, $\\log_2(x+\\tf{2}{y}) + \\log_2(y+\\tf{2}{x})$의 최솟값은? [3.9점]",
    choices: ["1", "2", "3", "4", "5"],
    answer: 3,
    solution: "로그의 성질과 산술·기하 평균 부등식을 활용한다. <br>\n준식 $= \\log_2 \\left( (x+\\tf{2}{y})(y+\\tf{2}{x}) \\right) = \\log_2 (xy + 2 + 2 + \\tf{4}{xy})$ <br>\n$\\implies \\log_2 (xy + \\tf{4}{xy} + 4)$ <br>\n$xy > 0$이므로 산술·기하 평균에 의해 $xy + \\tf{4}{xy} \\ge 2\\sqrt{xy \\cdot \\tf{4}{xy}} = 4$ <br>\n$\\implies \\text{최솟값} = \\log_2(4+4) = \\log_2 8 = 3$ <br>\n$\\therefore 3$"
  },
  {
    question: "서술형1. [상] 사다리꼴 $ABCD$의 넓이가 25 이하가 되도록 하는 모든 자연수 $n$의 값의 합을 구하는 과정을 서술하시오. (그림 및 조건 생략) [5점]",
    choices: [" ", " ", " ", " ", " "],
    answer: "25",
    solution: "기하학적 좌표를 설정하고 넓이 부등식을 해결한다. <br>\n① 각 점의 좌표: $A(1, n), B(1, 2), C(2, n^2), D(2, 4)$ <br>\n② 사다리꼴의 넓이 $S$: <br>\n$S = \\tf{1}{2}(AB + CD) \\times (2-1) = \\tf{1}{2}( (n-2) + (n^2-4) ) = \\tf{1}{2}(n^2+n-6)$ <br>\n③ 부등식 풀이: $\\tf{1}{2}(n^2+n-6) \\le 25 \\implies n^2+n-56 \\le 0$ <br>\n$\\implies (n+8)(n-7) \\le 0 \\implies -8 \\le n \\le 7$ <br>\n④ 조건 확인: $n \\ge 3$인 자연수이므로 $n = 3, 4, 5, 6, 7$ <br>\n$\\therefore \\text{합} = 3+4+5+6+7 = 25$\n\n"
  },
  {
    question: "서술형2. [상] $2 \\le x \\le 4$인 실수 $x$에 대하여 함수 $y = \\log_a(x^2-4x+9)$의 최솟값이 $-2$일 때, 최댓값을 $\\log_3 \\tf{1}{m}$이라 할 때, $m$값을 구하는 과정을 서술하시오. [5점]",
    choices: [" ", " ", " ", " ", " "],
    answer: "5",
    solution: "진수의 범위를 구한 뒤 밑의 범위에 따라 케이스를 나눈다. <br>\n① 진수 $f(x) = (x-2)^2 + 5$라 하면, $2 \\le x \\le 4$에서 $5 \\le f(x) \\le 9$ <br>\n② 밑 $a$의 범위 판별: <br>\nCase 1 ($a > 1$): 최솟값 $\\log_a 5 = -2 \\implies a^{-2} = 5 \\implies a^2 = \\tf{1}{5} \\implies a < 1$ (모순) <br>\nCase 2 ($0 < a < 1$): 최솟값 $\\log_a 9 = -2 \\implies a^{-2} = 9 \\implies a^2 = \\tf{1}{9} \\implies a = \\tf{1}{3}$ (성립) <br>\n③ 최댓값 구하기: $y = \\log_{\\tf{1}{3}} f(x)$는 감소함수이므로 진수가 최소일 때 최대 <br>\n$\\implies \\text{최댓값} = \\log_{\\tf{1}{3}} 5 = -\\log_3 5 = \\log_3 \\tf{1}{5}$ <br>\n$\\implies \\log_3 \\tf{1}{m} = \\log_3 \\tf{1}{5} \\implies m = 5$ <br>\n$\\therefore 5$"
  },
  {
    question: "서술형3. [최상] $(\\log_3 x)^2 - 2\\log_3 x + k = 0$의 한 근이 $3x^2-4x+1=0$의 두 근 사이에 있을 때, 두 근의 곱과 상수 $k$의 범위를 구하시오. [5점]",
    choices: [" ", " ", " ", " ", " "],
    answer: "9, -3 < k < 0",
    solution: "이차방정식의 근의 위치 관계와 로그의 성질을 활용한다. <br>\n① $3x^2-4x+1=0 \\implies (3x-1)(x-1)=0 \\implies x = \\tf{1}{3}, 1$ <br>\n② $\\log_3 x = t$로 치환하면 $t^2 - 2t + k = 0$ <br>\n한 근 $x$가 $\\tf{1}{3} < x < 1$ 사이에 있으므로, $t = \\log_3 x$의 한 근 $t_1$은 $-1 < t_1 < 0$에 존재해야 함 <br>\n③ 두 근의 합: $t_1 + t_2 = 2 \\implies \\log_3(x_1x_2) = 2 \\implies x_1x_2 = 9$ <br>\n④ $k$의 범위: $f(t) = t^2-2t+k$라 할 때, 축이 $t=1$이므로 $f(-1)f(0) < 0$ 활용 <br>\n$\\implies (k+3)k < 0 \\implies -3 < k < 0$ <br>\n$\\therefore \\text{두 근의 곱: } 9, \\text{ 범위: } -3 < k < 0$\n\n"
  },
  {
    question: "서술형4. [상] $x = \\cos \\tf{a+b}{4}\\pi$의 값이 음수가 되도록 하는 순서쌍 $(a, b)$의 개수를 구하시오. ($a, b \\in \\{1,2,3,4\\}$) [5점]",
    choices: [" ", " ", " ", " ", " "],
    answer: "9",
    solution: "삼각함수의 부호와 주사위 눈의 조합을 이용한다. <br>\n① $\\cos \\tf{a+b}{4}\\pi < 0 \\implies \\tf{\\pi}{2} < \\tf{a+b}{4}\\pi < \\tf{3\\pi}{2} \\implies 2 < a+b < 6$ <br>\n② 가능한 합 $a+b$ 조사: <br>\n- $a+b=3$: $(1,2), (2,1)$ (2개) <br>\n- $a+b=4$: $(1,3), (2,2), (3,1)$ (3개) <br>\n- $a+b=5$: $(1,4), (2,3), (3,2), (4,1)$ (4개) <br>\n③ 총 개수: $2 + 3 + 4 = 9$개 <br>\n$\\therefore 9$\n\n"
  }
];
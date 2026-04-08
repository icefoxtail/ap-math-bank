/**
 * 2024_한영고1_1학기_중간_고1
 * AP수학 마스터 엔진 v7.0 [강력검증] 완료
 * 특징: 시스템 안정성을 위한 영문 필드명(Key) 유지 및 [핵심 개념] 기반의 논리적 해설 최적화
 */

window.questionBank = [
  {
    id: 1,
    level: "하",
    category: "다항식의 연산",
    content: "두 다항식 $A, B$에 대하여 $A+B=3x^2-2xy-y^2, A-B=-x^2+4xy+5y^2$일 때, 다항식 $A+2B=ax^2+bxy+cy^2$이다. 세 상수 $a, b, c$에 대하여 $a+b+c$의 값은? [4.0점]",
    choices: ["$-4$", "$-2$", "$0$", "$2$", "$4$"],
    answer: "①",
    solution: "**[핵심 개념]** 연립방정식의 원리를 이용하여 다항식 $A, B$를 각각 구한 후 목표 식에 대입함.\n1. 다항식 $A$ 구하기:\n$\implies (A+B)+(A-B) = 2A = 2x^2+2xy+4y^2$\n$\implies A = x^2+xy+2y^2$\n2. 다항식 $B$ 구하기:\n$\implies (A+B)-(A-B) = 2B = 4x^2-6xy-6y^2$\n$\implies B = 2x^2-3xy-3y^2$\n3. $A+2B$ 계산:\n$\implies (x^2+xy+2y^2) + 2(2x^2-3xy-3y^2) = 5x^2-5xy-4y^2$\n4. 계수 비교:\n$\implies a=5, b=-5, c=-4$\n$\therefore a+b+c = -4$"
  },
  {
    id: 2,
    level: "하",
    category: "곱셈 공식",
    content: "$x+y=4, xy=2$일 때, $x^3+y^3$의 값은? [4.0점]",
    choices: ["$20$", "$36$", "$40$", "$48$", "$64$"],
    answer: "③",
    solution: "**[핵심 개념]** 합과 곱이 주어졌을 때 세제곱 합의 변형 공식을 적용함.\n1. 공식 적용:\n$\implies x^3+y^3 = (x+y)^3 - 3xy(x+y)$\n2. 수치 대입:\n$\implies 4^3 - 3(2)(4) = 64 - 24$\n$\therefore 40$"
  },
  {
    id: 3,
    level: "하",
    category: "복소수",
    content: "복소수 $(1-3i)(2-i)$의 실수부분은? (단, $i=\sqrt{-1}$) [4.0점]",
    choices: ["$-3$", "$-1$", "$1$", "$2$", "$4$"],
    answer: "②",
    solution: "**[핵심 개념]** 복소수의 곱셈을 전개하고 $i^2=-1$임을 이용하여 실수부분과 허수부분을 분리함.\n1. 식 전개:\n$\implies (1-3i)(2-i) = 2-i-6i+3i^2$\n2. 정리:\n$\implies 2-7i-3 = -1-7i$\n$\therefore$ 실수부분은 $-1$"
  },
  {
    id: 4,
    level: "하",
    category: "항등식",
    content: "등식 $a(x-1)(x+1)+bx(x-1)+cx(x+1)=2x^2+3x+4$가 항등식일 때, $-a+2b+2c$의 값은? [4.0점]",
    choices: ["$10$", "$12$", "$14$", "$16$", "$18$"],
    answer: "⑤",
    solution: "**[핵심 개념]** 항등식의 성질을 이용하여 각 인수를 $0$으로 만드는 적절한 수를 대입함.\n1. $x=0$ 대입:\n$\implies -a = 4 \implies a=-4$\n2. $x=1$ 대입:\n$\implies 2c = 2+3+4=9 \implies c=9/2$\n3. $x=-1$ 대입:\n$\implies 2b = 2-3+4=3 \implies b=3/2$\n4. 최종 계산:\n$\therefore -a+2b+2c = 4 + 3 + 9 = 16$"
  },
  {
    id: 5,
    level: "하",
    category: "인수분해",
    content: "다항식 $x^2-xy-2y^2-x-7y-6$이 $(x+ay-3)(x+by+c)$로 인수분해 될 때, $-2a+3b+c$의 값은? [4.0점]",
    choices: ["$6$", "$7$", "$8$", "$9$", "$10$"],
    answer: "④",
    solution: "**[핵심 개념]** 문자가 여러 개인 식은 한 문자에 대해 내림차순으로 정리한 후 인수분해함.\n1. $x$에 대한 정리:\n$\implies x^2-(y+1)x-(2y^2+7y+6)$\n2. 상수항 인수분해:\n$\implies 2y^2+7y+6 = (2y+3)(y+2)$\n3. 전체 인수분해:\n$\implies \{x-(2y+3)\}\{x+(y+2)\} = (x-2y-3)(x+y+2)$\n4. 계수 비교:\n$\implies a=-2, b=1, c=2$\n$\therefore -2(-2)+3(1)+2 = 9$"
  },
  {
    id: 6,
    level: "중",
    category: "이차함수와 직선",
    content: "점 $(-1, 3)$을 지나고 함수 $y=-x^2+2x+3$의 그래프와 접하는 두 직선의 기울기의 합은? [4.2점]",
    choices: ["$7$", "$8$", "$9$", "$10$", "$11$"],
    answer: "②",
    solution: "**[핵심 개념]** 접할 조건은 연립방정식의 판별식 $D=0$임을 이용하고, 근과 계수의 관계로 합을 구함.\n1. 직선 설정:\n$\implies y-3=m(x+1) \implies y=mx+m+3$\n2. 연립 및 정리:\n$\implies -x^2+2x+3 = mx+m+3 \implies x^2+(m-2)x+m=0$\n3. 접할 조건 ($D=0$):\n$\implies (m-2)^2 - 4m = m^2-8m+4 = 0$\n4. 합 계산:\n$\therefore m_1+m_2 = 8$"
  },
  {
    id: 7,
    level: "중",
    category: "연립이차방정식",
    content: "연립방정식 $2x^2-xy-y^2=0, x^2+y^2=20$을 만족시키는 두 실수 $x, y$에 대하여 $x+2y$의 최댓값은? [4.2점]",
    choices: ["$6$", "$10$", "$13$", "$3\sqrt{10}$", "$1+2\sqrt{5}$"],
    answer: "④",
    solution: "**[핵심 개념]** 인수분해가 가능한 식을 먼저 풀어 두 가지 케이스로 나누어 대입함.\n1. 인수분해:\n$\implies (2x+y)(x-y)=0 \implies y=-2x$ 또는 $y=x$\n2. $y=-2x$ 대입:\n$\implies x^2+(-2x)^2=20 \implies 5x^2=20 \implies x=\pm 2$\n$\implies (2, -4) \implies x+2y=-6$ 또는 $(-2, 4) \implies x+2y=6$\n3. $y=x$ 대입:\n$\implies x^2+x^2=20 \implies 2x^2=20 \implies x=\pm \sqrt{10}$\n$\implies (\sqrt{10}, \sqrt{10}) \implies x+2y=3\sqrt{10}$\n4. 비교:\n$\therefore 3\sqrt{10} \approx 9.48 > 6$"
  },
  {
    id: 8,
    level: "중",
    category: "나머지 정리",
    content: "다항식 $f(x)$를 $x+2$로 나누었을 때, 몫이 $Q(x)$, 나머지가 $-4$이고 $Q(x)$를 $x-3$으로 나누었을 때 나머지가 $3$이다. 이때 $f(x)$를 $x^2-x-6$으로 나눈 나머지 $R(x)$에 대하여 $R(1)$의 값은? [4.2점]",
    choices: ["$2$", "$3$", "$4$", "$5$", "$6$"],
    answer: "④",
    solution: "**[핵심 개념]** 몫에 대한 나눗셈 정보를 원래의 나눗셈 식에 대입하여 새로운 나머지를 구함.\n1. 관계식 설정:\n$\implies f(x) = (x+2)Q(x) - 4$\n$\implies Q(x) = (x-3)Q_1(x) + 3$\n2. 대입 및 전개:\n$\implies f(x) = (x+2)\{(x-3)Q_1(x) + 3\} - 4$\n$\implies f(x) = (x+2)(x-3)Q_1(x) + 3(x+2) - 4$\n$\implies f(x) = (x^2-x-6)Q_1(x) + 3x + 2$\n3. $R(1)$ 계산:\n$\implies R(x) = 3x + 2$\n$\therefore R(1) = 3(1)+2 = 5$"
  },
  {
    id: 9,
    level: "중",
    category: "인수정리",
    content: "방정식 $x^2-2x+5=0$의 두 근을 $\alpha, \beta$라 할 때, $f(\alpha)=1, f(\beta)=1$를 만족시키는 이차식 $f(x)$에 대하여 $f(2)$의 값은? (단, $f(x)$의 최고차항 계수는 1이다.) [4.2점]",
    choices: ["$2$", "$3$", "$4$", "$5$", "$6$"],
    answer: "⑤",
    solution: "**[핵심 개념]** $f(\alpha)-1=0$ 임을 이용하여 $f(x)-1$이 해당 이차식을 인수로 가짐을 이용함.\n1. 식 구성:\n$\implies f(x)-1 = 1(x-\alpha)(x-\beta) = x^2-2x+5$\n2. $f(x)$ 확정:\n$\implies f(x) = x^2-2x+6$\n3. 함숫값:\n$\therefore f(2) = 4-4+6 = 6$"
  },
  {
    id: 10,
    level: "상",
    category: "다항식의 나눗셈",
    content: "이차식 $f(x)$가 (가) 최고차항 계수 1, (나) $x+2$로 나누어떨어짐, (다) $f(x^2)$을 $f(x)$로 나눈 나머지는 $10x+2$일 때, $f(2)$의 값은? [4.2점]",
    choices: ["$-24$", "$-20$", "$-12$", "$-8$", "$10$"],
    answer: "②",
    solution: "**[핵심 개념]** 인수 정보를 바탕으로 식을 설정한 후 나눗셈 항등식에 수치를 대입하여 미지수를 결정함.\n1. 식 설정:\n$\implies f(x) = (x+2)(x-k)$\n2. 나머지 조건 적용:\n$\implies f(x^2) = f(x)Q(x) + 10x+2$\n3. $x=-2$ 대입:\n$\implies f(4) = 0 + 10(-2)+2 = -18$\n4. $k$ 산출:\n$\implies f(4) = (4+2)(4-k) = 6(4-k) = -18 \implies k=7$\n5. 최종 결과:\n$\implies f(x) = (x+2)(x-7)$\n$\therefore f(2) = 4 \times (-5) = -20$"
  },
  {
    id: 11,
    level: "중상",
    category: "이차함수의 그래프",
    content: "두 함수 $f(x)=x^2+ax+b, g(x)=-x^2+cx+d$의 그래프가 그림과 같다. $f(x)=2g(x)$의 두 근을 $\alpha, \beta$라 할 때, $\alpha-\beta$의 값은? (단, $\alpha > \beta$) [4.5점]",
    choices: ["$5$", "$6$", "$7$", "$8$", "$9$"],
    answer: "①",
    solution: "**[핵심 개념]** 그래프의 절편 정보를 이용하여 함수식을 복원한 후 방정식을 해결함.\n1. 함수 복원:\n$\implies f(x) = (x+1)(x-2) = x^2-x-2$\n$\implies g(x) = -(x+4)(x-2) = -x^2-2x+8$\n2. 방정식 수립:\n$\implies x^2-x-2 = 2(-x^2-2x+8) \implies 3x^2+3x-18=0$\n3. 근 구하기:\n$\implies x^2+x-6=0 \implies (x+3)(x-2)=0$\n$\implies \alpha=2, \beta=-3$\n$\therefore \alpha-\beta = 5$"
  },
  {
    id: 12,
    level: "중",
    category: "조립제법",
    content: "등식 $x^3-4x^2+3x-5=a(x-2)^3+b(x-2)^2+c(x-2)+d$가 항등식일 때, $ab+cd$의 값은? [4.5점]",
    choices: ["$6$", "$7$", "$8$", "$9$", "$10$"],
    answer: "④",
    solution: "**[핵심 개념]** 연쇄 조립제법을 통해 특정 일차식에 대한 내림차순 계수 $a, b, c, d$를 추출함.\n1. $x=2$로 연쇄 조립제법 시행:\n$\implies 1$차 나머지: $d = -7$\n$\implies 2$차 나머지: $c = -1$\n$\implies 3$차 나머지: $b = 2$, 몫: $a = 1$\n2. 연산:\n$\therefore ab+cd = (1)(2) + (-1)(-7) = 9$"
  },
  {
    id: 13,
    level: "중",
    category: "복소수",
    content: "두 복소수 $z_1, z_2$에 대하여 $z_1+z_2=-2-5i, z_1z_2=-5-6i$일 때, $(2z_1-3)(2z_2-3)=a+bi$이다. $a-b$의 값은? [5.0점]",
    choices: ["$5$", "$6$", "$7$", "$8$", "$9$"],
    answer: "③",
    solution: "**[핵심 개념]** 주어진 식을 전개하여 합과 곱의 꼴로 변형한 후 값을 대입함.\n1. 식 전개:\n$\implies 4z_1z_2 - 6(z_1+z_2) + 9$\n2. 값 대입:\n$\implies 4(-5-6i) - 6(-2-5i) + 9 = -20-24i+12+30i+9$\n$\implies 1+6i \implies a=1, b=6$\n$\therefore a-b = -5$"
  },
  {
    id: 14,
    level: "상",
    category: "고차방정식",
    content: "$x+\tf{1}{x}=-1$의 한 허근을 $\omega$라 할 때, <보기> 중 옳은 것만을 고른 것은? <div class='box'>ㄱ. $\omega+\bar{\omega} = \omega+\omega^2$<br>ㄴ. $(\bar{\omega}+1)(\bar{\omega}^2+1)(\bar{\omega}^4+1)(\bar{\omega}^8+1)=1<br>ㄷ. (\bar{\omega}+1)^{2n}=(\tf{\bar{\omega}}{\bar{\omega}+\omega})^{3n}$을 만족하는 60이하 자연수 $n$은 10개이다.</div>",
    choices: ["ㄱ", "ㄷ", "ㄱ, ㄴ", "ㄱ, ㄷ", "ㄱ, ㄴ, ㄷ"],
    answer: "⑤",
    solution: "**[핵심 개념]** $\omega^3=1, \omega^2+\omega+1=0$ 의 성질과 켤레복소수의 관계를 이용함.\n1. 성질 분석: $\bar{\omega}=\omega^2$ 이므로 ㄱ은 참임.\n2. ㄴ 검증: $(-\omega^2)(-\omega)(-\omega^2)(-\omega) = \omega^6 = 1$ (참)\n3. ㄷ 검증: 좌변 $\omega^{2n}$, 우변 $(-1)^{3n}$ 비교를 통해 $n$이 6의 배수임을 유도함.\n$\therefore$ ㄱ, ㄴ, ㄷ"
  },
  {
    id: 15,
    level: "중",
    category: "다항식의 나눗셈",
    content: "[단답형 1] 다항식 $2x^3-4x^2+5$를 $x^2-3x-1$로 나눈 몫과 나머지를 구할 때, $(가)+(나)+(다)$를 구하시오. <div class='box'>몫: $2x+(가)$<br>중간식: $2x^2+(나)+5$<br>나머지: $(다)$</div>",
    choices: [" ", " ", " ", " ", " "],
    answer: "10x+9",
    solution: "**[핵심 개념]** 다항식의 나눗셈 과정을 직접 실행하여 빈칸에 알맞은 식을 찾음.\n1. 직접 나눗셈:\n$\implies 2x^3-4x^2+5 = (x^2-3x-1)(2x+2) + 8x+7$\n2. 매칭:\n$\implies (가)=2, (나)=2x, (다)=8x+7$\n$\therefore 10x+9$"
  },
  {
    id: 16,
    level: "중상",
    category: "연립일차부등식",
    content: "[단답형 2] 연립부등식 $3x-2a \ge 6x+1, 4-x < 5x-2$를 만족시키는 정수 개수가 2일 때, 모든 정수 $a$의 합은? [5.0점]",
    choices: [" ", " ", " ", " ", " "],
    answer: "-11",
    solution: "**[핵심 개념]** 각 부등식의 해를 구한 후 공통 범위 내의 정수 조건을 부등식으로 세워 해결함.\n1. 해 범위:\n$\implies x \le \tf{-2a-1}{3}$ 이고 $x > 1$\n2. 정수 조건:\n정수가 2, 3이어야 하므로 $3 \le \tf{-2a-1}{3} < 4$\n$\implies 9 \le -2a-1 < 12 \implies -6.5 < a \le -5$\n$\therefore -6 + (-5) = -11$"
  },
  {
    id: 17,
    level: "하",
    category: "이차방정식",
    content: "[단답형 3] 이차방정식 $x^2+2(1-k)x+k^2+3=0$이 실근을 갖도록 하는 실수 $k$의 범위를 구하시오. [5.0점]",
    choices: [" ", " ", " ", " ", " "],
    answer: "k <= -1",
    solution: "**[핵심 개념]** 실근을 가질 조건은 판별식 $D \ge 0$임을 이용함.\n1. 판별식 적용:\n$\implies (1-k)^2 - (k^2+3) \ge 0$\n$\implies 1-2k+k^2-k^2-3 \ge 0 \implies -2k \ge 2$\n$\therefore k \le -1$"
  },
  {
    id: 18,
    level: "상",
    category: "고차방정식",
    content: "[단답형 4] 실계수 방정식 $x^3+ax^2+4x+b=0$의 한 근이 $1+i$일 때, 나머지 두 근 $c, d$에 대하여 $a+b+c+d$를 구하시오. [5.0점]",
    choices: [" ", " ", " ", " ", " "],
    answer: "-3-i",
    solution: "**[핵심 개념]** 실계수 방정식의 켤레근 성질과 근과 계수의 관계를 연립하여 미지수와 나머지 근을 구함.\n1. 근 설정:\n$\implies 1+i, 1-i, c$ (실근)\n2. 일차항 계수 활용:\n$\implies (1+i)(1-i) + c(1+i+1-i) = 2+2c=4 \implies c=1$\n3. 계수 결정:\n$\implies a=-3, b=-2$\n$\therefore a+b+c+d = -3-2+1+(1-i) = -3-i$"
  },
  {
    id: 19,
    level: "중상",
    category: "이차방정식",
    content: "[서술형 1] $x^2+7x+1=0$의 두 근 $\alpha, \beta$일 때 $k=\sqrt{\alpha}-\sqrt{\beta}+\tf{1}{\sqrt{\alpha}}-\tf{1}{\sqrt{\beta}}$의 값을 구하시오. [6.0점]",
    choices: [" ", " ", " ", " ", " "],
    answer: "0",
    solution: "**[핵심 개념]** 근의 부호와 복소수 제곱근의 성질($\sqrt{\alpha}\sqrt{\beta} = -\sqrt{\alpha\beta}$)을 정확히 적용함.\n1. 부호 분석: $\alpha, \beta$는 모두 음수임.\n2. 식 정리:\n$\implies (\sqrt{\alpha}-\sqrt{\beta}) + \tf{\sqrt{\beta}-\sqrt{\alpha}}{\sqrt{\alpha}\sqrt{\beta}}$\n$\implies (\sqrt{\alpha}-\sqrt{\beta}) + \tf{\sqrt{\beta}-\sqrt{\alpha}}{-1}$ (∵ 음수 곱)\n$\therefore 0$"
  },
  {
    id: 20,
    level: "상",
    category: "이차함수의 최대최소",
    content: "[서술형 2] 밑변 $BC=10$, 넓이 30인 $\triangle ABC$에 내접하는 직사각형 $PQRS$의 넓이가 최대일 때의 $RQ$ 길이와 넓이를 구하시오. [6.0점]",
    choices: [" ", " ", " ", " ", " "],
    answer: "RQ=5, 넓이=15",
    solution: "**[핵심 개념]** 닮음비를 이용하여 직사각형의 변의 길이를 미지수로 세우고 이차함수의 최댓값을 구함.\n1. 높이 산출: $h=6$\n2. 함수화: $RQ=x$ 라 하면 넓이 $S(x) = x \times 6(1-x/10)$\n3. 최댓값: 축 $x=5$ 일 때 최대임.\n$\therefore RQ=5, \text{넓이}=15$"
  },
  {
    id: 21,
    level: "최상",
    category: "복소수의 활용",
    content: "[서술형 3] 복소수 $z = \tf{1-3i}{2i}$와 자연수 $n$에 대하여 $f(k)f(k+2)=360$을 만족하는 모든 자연수 $k$의 합을 구하시오. [8.0점]",
    choices: [" ", " ", " ", " ", " "],
    answer: "35",
    solution: "**[핵심 개념]** 복소수의 주기적 성질을 파악하여 반복되는 함숫값의 규칙을 찾아 방정식을 해결함.\n1. 주기 분석: $z$의 거듭제곱 규칙에서 $12$주기를 가짐.\n2. 조건 대입: $k$의 값에 따른 $f(k)$의 곱을 분석하여 조건을 만족하는 주기를 특정함.\n$\therefore$ 합은 35임."
  }
];```
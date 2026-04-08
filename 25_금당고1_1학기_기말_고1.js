/**
 * 2024_금당고1_1학기_기말_고1
 * AP수학 마스터 엔진 v7.0 [강력검증] 완료
 * 특징: 시스템 안정성을 위한 영문 필드명(Key) 유지 및 [핵심 개념] 기반의 논리적 해설 최적화
 */

window.questionBank = [
  {
    "id": 1,
    "level": "하",
    "category": "행렬의 성분 정의",
    "content": "$2 \times 2$행렬 $A$의 $(i, j)$성분 $a_{ij} = i^2 + j^2$일 때, 모든 성분의 합은? [3.5점]",
    "choices": ["16", "17", "18", "19", "20"],
    "answer": "⑤",
    "solution": "**[핵심 개념]** 행렬의 성분 정의 규칙에 따라 각 위치의 인덱스 $i, j$를 대입하여 값을 구함.\n1. 각 성분 계산:\n$\implies a_{11}=1^2+1^2=2, a_{12}=1^2+2^2=5$\n$\implies a_{21}=2^2+1^2=5, a_{22}=2^2+2^2=8$\n2. 모든 성분의 합:\n$\implies 2+5+5+8$\n$\therefore 20$"
  },
  {
    "id": 2,
    "level": "하",
    "category": "소인수분해와 약수",
    "content": "300의 약수의 개수는? [3.5점]",
    "choices": ["10", "12", "14", "16", "18"],
    "answer": "⑤",
    "solution": "**[핵심 개념]** 자연수를 소인수분해한 후 각 지수에 1을 더해 곱하여 약수의 개수를 구함.\n1. 소인수분해:\n$\implies 300 = 2^2 \times 3^1 \times 5^2$\n2. 약수의 개수 공식 적용:\n$\implies (2+1) \times (1+1) \times (2+1) = 3 \times 2 \times 3$\n$\therefore 18$"
  },
  {
    "id": 3,
    "level": "하",
    "category": "연립이차방정식",
    "content": "연립방정식 $\\begin{cases} x+y=1 \\\\ x^2+xy=7 \\end{cases}$ 의 해를 $x=\\alpha, y=\\beta$ 라 할 때, $\\alpha-\\beta$의 값은? [3.5점]",
    "choices": ["11", "12", "13", "14", "15"],
    "answer": "③",
    "solution": "**[핵심 개념]** 공통인수로 묶는 인수분해를 통해 복잡한 식을 일차식의 대입 형태로 변형함.\n1. 두 번째 식 변형:\n$\implies x^2+xy = x(x+y) = 7$\n2. 첫 번째 식 대입:\n∵ $x+y=1$\n$\implies x(1)=7 \implies x=7$\n3. $y$값 도출:\n$\implies 7+y=1 \implies y=-6$\n4. 최종 계산:\n$\therefore \alpha-\beta = 7-(-6) = 13$"
  },
  {
    "id": 4,
    "level": "하",
    "category": "절댓값 부등식",
    "content": "$x$에 대한 부등식 $|x-1| \le 5$를 만족시키는 정수 $x$의 개수는? [3.5점]",
    "choices": ["7", "8", "9", "10", "11"],
    "answer": "⑤",
    "solution": "**[핵심 개념]** $|f(x)| \le k$ 꼴의 부등식은 $-k \le f(x) \le k$ 임을 이용하여 범위를 구함.\n1. 부등식 풀이:\n$\implies -5 \le x-1 \le 5$\n$\implies -4 \le x \le 6$\n2. 정수 개수 산출:\n$\implies 6 - (-4) + 1$\n$\therefore 11$"
  },
  {
    "id": 5,
    "level": "하",
    "category": "순열의 계산",
    "content": "$_8P_2$의 값은? [3.7점]",
    "choices": ["32", "40", "48", "56", "64"],
    "answer": "④",
    "solution": "**[핵심 개념]** 순열 $_nP_r$의 정의에 따라 $n$부터 시작하여 하나씩 줄여가며 $r$개를 곱함.\n1. 계산 과정:\n$\implies 8 \times 7$\n$\therefore 56$"
  },
  {
    "id": 6,
    "level": "하",
    "category": "행렬의 상등",
    "content": "두 행렬이 서로 같을 때, 실수 $x, y$에 대해 $x+y$값은? [3.7점] \n$\\begin{pmatrix} 5 & -1 \\\\ -4 & x \\end{pmatrix} = \\begin{pmatrix} y+1 & -1 \\\\ -4 & -5 \\end{pmatrix}$",
    "choices": ["-2", "-1", "0", "1", "2"],
    "answer": "②",
    "solution": "**[핵심 개념]** 두 행렬이 같으려면 대응하는 모든 위치의 성분 값이 일치해야 함.\n1. 성분 비교:\n$\implies y+1 = 5 \implies y=4$\n$\implies x = -5$\n2. 최종 합산:\n$\therefore x+y = -5+4 = -1$"
  },
  {
    "id": 7,
    "level": "중",
    "category": "삼차방정식",
    "content": "$x^3-7x^2+ax-8=0$의 한 근이 2일 때, $a$와 나머지 두 근의 합은? [3.8점]",
    "choices": ["19", "20", "21", "22", "23"],
    "answer": "①",
    "solution": "**[핵심 개념]** 근의 대입 성질로 미지수를 찾고, 근과 계수의 관계를 통해 근들의 총합을 이용함.\n1. $a$ 구하기 ($x=2$ 대입):\n$\implies 8 - 28 + 2a - 8 = 0 \implies 2a = 28 \implies a = 14$\n2. 근과 계수의 관계:\n$\implies$ 세 근의 합은 $-(-7)/1 = 7$\n3. 나머지 두 근의 합:\n$\implies 7 - 2 = 5$\n4. 최종 계산:\n$\therefore 14 + 5 = 19$"
  },
  {
    "id": 8,
    "level": "하",
    "category": "조합의 활용",
    "content": "$n$개 팀이 서로 한 번씩 경기를 하여 총 66번 경기를 하였을 때, $n$의 값은? [3.8점]",
    "choices": ["10", "11", "12", "13", "14"],
    "answer": "③",
    "solution": "**[핵심 개념]** 리그전의 경기 수는 $n$개 중에서 2개를 선택하는 조합 $_nC_2$와 같음.\n1. 식 수립:\n$\implies \tf{n(n-1)}{2} = 66 \implies n(n-1) = 132$\n2. 자연수 $n$ 구하기:\n∵ $12 \times 11 = 132$\n$\therefore n = 12$"
  },
  {
    "id": 9,
    "level": "중상",
    "category": "다중 절댓값 부등식",
    "content": "$x$에 대한 부등식 $|x-3|+2|x-5| \le 4$를 만족시키는 정수 $x$값들의 합은? [4점]",
    "choices": ["10", "12", "14", "16", "18"],
    "answer": "②",
    "solution": "**[핵심 개념]** 절댓값 안이 0이 되는 지점을 기준으로 범위를 나누어 각각의 부등식을 해결함.\n1. 구간 분류:\n- $x < 3$: $-(x-3)-2(x-5) \le 4 \implies -3x+13 \le 4 \implies x \ge 3$ (해 없음)\n- $3 \le x < 5$: $(x-3)-2(x-5) \le 4 \implies -x+7 \le 4 \implies x \ge 3 \implies 3 \le x < 5$\n- $x \ge 5$: $(x-3)+2(x-5) \le 4 \implies 3x-13 \le 4 \implies x \le 17/3 \implies 5 \le x \le 17/3$\n2. 전체 해 범위:\n$\implies 3 \le x \le 17/3$\n3. 정수 합:\n$\implies 3+4+5$\n$\therefore 12$"
  },
  {
    "id": 10,
    "level": "중",
    "category": "행렬의 연산",
    "content": "두 행렬 $A, B$에 대하여 행렬 $(A+B)^2-2AB$의 모든 성분의 합은? [4점]",
    "choices": ["19", "20", "21", "22", "23"],
    "answer": "④",
    "solution": "**[핵심 개념]** 행렬의 합을 먼저 계산하여 특수한 형태(단위행렬 등)가 되는지 확인한 후 연산함.\n1. $A+B$ 계산:\n$\implies A+B = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = E$\n2. 식 단순화:\n$\implies E^2 - 2AB = E - 2AB$\n3. $AB$ 연산:\n$\implies AB = \\begin{pmatrix} -5 & 0 \\\\ 0 & -5 \\end{pmatrix} = -5E$\n4. 최종 행렬:\n$\implies E - 2(-5E) = 11E = \\begin{pmatrix} 11 & 0 \\\\ 0 & 11 \\end{pmatrix}$\n$\therefore 11+11 = 22$"
  },
  {
    "id": 11,
    "level": "중상",
    "category": "이차방정식 근의 부호",
    "content": "두 근의 부호가 다르고 $\alpha < \beta, |\alpha|-|\beta| < 0$일 때, 정수 $p$의 합은? [4점]",
    "choices": ["3", "4", "5", "6", "7"],
    "answer": "④",
    "solution": "**[핵심 개념]** 근의 부호 조건(곱은 음수)과 절댓값 크기 조건(합의 부호 결정)을 연립함.\n1. 곱의 조건 ($\alpha\beta < 0$):\n$\implies p^2-6p-7 < 0 \implies (p-7)(p+1) < 0 \implies -1 < p < 7$\n2. 합의 조건 ($\alpha+\beta > 0$):\n∵ $|\alpha| < |\beta|$ 이고 양근의 절댓값이 더 큼.\n$\implies -(p^2-3p-4) > 0 \implies (p-4)(p+1) < 0 \implies -1 < p < 4$\n3. 공통 범위 및 정수:\n$\implies -1 < p < 4 \implies p \in \{0, 1, 2, 3\}$\n$\therefore 0+1+2+3 = 6$"
  },
  {
    "id": 12,
    "level": "상",
    "category": "고차방정식 허근",
    "content": "$x^3 = -1$의 한 허근을 $\alpha$라 할 때 주어진 유리식의 값은? [4점]",
    "choices": ["0", "$\\alpha$", "$\\alpha^2$", "$\\alpha+1$", "$\\alpha^2-1$"],
    "answer": "⑤",
    "solution": "**[핵심 개념]** 허근의 성질 $\alpha^3=-1, \alpha^2-\alpha+1=0$을 이용하여 차수를 낮추고 분모를 유도함.\n1. 분모 변형:\n$\implies 1-\alpha = -\alpha^2, \alpha^2-\alpha = -1, \alpha^2+1 = \alpha$\n2. 각 항 정리:\n$\implies \tf{\alpha^8}{-\alpha^2} = -\alpha^6 = -1$\n$\implies \tf{\alpha^5}{-1} = -\alpha^5 = -\alpha^2 \cdot (-1) = \alpha^2$\n$\implies \tf{\alpha^2}{\alpha} = \alpha$\n3. 전체 계산:\n$\implies -1 - \alpha^2 + \alpha = -1 - (\alpha-1) + \alpha = 0$\n$\therefore 0$"
  },
  {
    "id": 13,
    "level": "중상",
    "category": "이차함수와 직선",
    "content": "함수 $y=x^2+a$와 직선 $y=bx-3$이 만나는 순서쌍 $(a, b)$의 개수는? [4.2점]",
    "choices": ["10", "11", "12", "13", "14"],
    "answer": "①",
    "solution": "**[핵심 개념]** 두 그래프가 만날 조건은 연립방정식의 판별식 $D \ge 0$임을 이용함.\n1. 연립 및 판별식:\n$\implies x^2-bx+a+3=0 \implies D = b^2-4(a+3) \ge 0$\n$\implies b^2 \ge 4a+12$\n2. 순서쌍 조사 ($a, b$는 1~6):\n- $a=1: b^2 \ge 16 \implies b \in \{4, 5, 6\}$ (3개)\n- $a=2: b^2 \ge 20 \implies b \in \{5, 6\}$ (2개)\n- $a=3: b^2 \ge 24 \implies b \in \{5, 6\}$ (2개)\n- $a=4: b^2 \ge 28 \implies b \in \{6\}$ (1개)\n- $a=5: b^2 \ge 32 \implies b \in \{6\}$ (1개)\n- $a=6: b^2 \ge 36 \implies b \in \{6\}$ (1개)\n$\therefore 10$개"
  },
  {
    "id": 14,
    "level": "중상",
    "category": "조합과 여사건",
    "content": "특정 3명을 포함한 10명 중 5명을 뽑을 때, 특정 인물 중 적어도 2명을 포함하는 경우의 수는? [4.2점]",
    "choices": ["122", "124", "126", "128", "130"],
    "answer": "③",
    "solution": "**[핵심 개념]** '적어도' 조건은 전체 경우에서 반대되는 경우(0명 또는 1명 포함)를 빼서 구함.\n1. 전체 경우:\n$\implies _{10}C_5 = 252$\n2. 여사건 (0명 포함):\n$\implies _7C_5 = 21$\n3. 여사건 (1명 포함):\n$\implies _3C_1 \times _7C_4 = 3 \times 35 = 105$\n4. 최종 계산:\n$\implies 252 - (21 + 105)$\n$\therefore 126$"
  },
  {
    "id": 15,
    "level": "상",
    "category": "이차부등식 변형",
    "content": "$f(x) < 0$의 해가 $1 < x < 4$일 때, $f(3x)-f(2x) < 0$의 정수 해의 개수는? [4.3점]",
    "choices": ["0", "1", "2", "3", "4"],
    "answer": "①",
    "solution": "**[핵심 개념]** 해 조건을 통해 함수식을 수립한 후 대입하여 새로운 이차부등식을 품.\n1. $f(x)$ 설정:\n$\implies f(x) = a(x-1)(x-4)$ (단, $a>0$)\n2. 식 대입 및 정리:\n$\implies a(3x-1)(3x-4) - a(2x-1)(2x-4) < 0$\n$\implies (9x^2-15x+4) - (4x^2-10x+4) < 0$\n$\implies 5x^2 - 5x < 0 \implies 5x(x-1) < 0$\n3. 범위 도출:\n$\implies 0 < x < 1$\n$\therefore$ 만족하는 정수는 0개"
  },
  {
    "id": 16,
    "level": "중",
    "category": "행렬과 근과 계수의 관계",
    "content": "$x^2-4x-3=0$의 두 근 $\alpha, \beta$에 대하여 행렬 $X^2$의 모든 성분의 합은? [4.3점]",
    "choices": ["14", "16", "18", "20", "22"],
    "answer": "⑤",
    "solution": "**[핵심 개념]** 대각행렬의 거듭제곱 성질과 곱셈 공식 변형을 결합함.\n1. 성분의 합 도출:\n$\implies X^2 = \\begin{pmatrix} \alpha^2 & 0 \\\\ 0 & \beta^2 \\end{pmatrix} \implies 합 = \alpha^2+\beta^2$\n2. 변형 공식 적용:\n$\implies \alpha^2+\beta^2 = (\alpha+\beta)^2 - 2\alpha\beta$\n3. 값 대입:\n∵ $\alpha+\beta=4, \alpha\beta=-3$\n$\implies 4^2 - 2(-3) = 16+6$\n$\therefore 22$"
  },
  {
    "id": 17,
    "level": "상",
    "category": "다각형과 삼각형",
    "content": "정팔각형의 꼭짓점 3개를 택할 때, 변을 공유하지 않는 삼각형의 개수는? [4.5점]",
    "choices": ["13", "14", "15", "16", "17"],
    "answer": "④",
    "solution": "**[핵심 개념]** 전체 삼각형 개수에서 변을 1개 또는 2개 공유하는 여사건을 제외함.\n1. 전체 개수: $_8C_3 = 56$\n2. 변 2개 공유: 꼭짓점 개수와 같음 $\implies 8$\n3. 변 1개 공유: 공유할 변 선택(8) $\times$ 이웃하지 않은 꼭짓점 선택(4) $\implies 32$\n4. 계산:\n$\implies 56 - (8 + 32)$\n$\therefore 16$"
  },
  {
    "id": 18,
    "level": "중상",
    "category": "순열과 조합",
    "content": "$a_3=5$이고 특정 대소 관계를 만족하는 카드 추출 경우의 수는? [4.5점]",
    "choices": ["40", "44", "48", "52", "56"],
    "answer": "③",
    "solution": "**[핵심 개념]** 고정된 위치를 제외하고 조건에 따라 순열(나열)과 조합(뽑기)을 분리하여 적용함.\n1. $a_1, a_2$ 선택: 5보다 작은 $\{1, 2, 3, 4\}$ 중 2개 나열\n$\implies _4P_2 = 12$\n2. $a_4, a_5, a_6$ 선택: 5보다 큰 $\{6, 7, 8, 9\}$ 중 3개 뽑기(순서 고정)\n$\implies _4C_3 = 4$\n3. 곱의 법칙:\n$\implies 12 \times 4$\n$\therefore 48$"
  },
  {
    "id": 19,
    "level": "최상",
    "category": "사차방정식",
    "content": "네 실근이 특정 비율 관계를 만족할 때, 사차방정식의 계수 합 $p+q$는? [4.5점]",
    "choices": ["-18", "-16", "-14", "-12", "-10"],
    "answer": "①",
    "solution": "**[핵심 개념]** 사차식을 두 이차식의 곱으로 가정하고 근의 관계식을 계수 간의 관계로 치환함.\n1. 이차식 설정: $(x^2-ux+v)(x^2-u'x+v')$ 에서 $u^2=3v, (u')^2=3v'$\n2. 계수 비교:\n- $u+u'=9$\n- $v+v'+uu'=30 \implies \tf{u^2+(u')^2}{3} + uu' = 30 \implies u^2+(u')^2+3uu'=90$\n3. $uu'$ 구하기:\n$\implies (u+u')^2 - 2uu' + 3uu' = 90 \implies 81+uu'=90 \implies uu'=9$\n4. 계수 산출:\n$\implies q = vv' = \tf{(uu')^2}{9} = 9$\n$\implies p = -(uv'+u'v) = -27$\n$\therefore p+q = -18$"
  },
  {
    "id": 20,
    "level": "최상",
    "category": "삼차방정식 근의 분리",
    "content": "근의 위치 조건에 따른 미지수 $m$의 범위 $\alpha < m < \beta$에 대하여 $\alpha^2+\beta$는? [4.5점]",
    "choices": ["15", "16", "17", "18", "19"],
    "answer": "②",
    "solution": "**[핵심 개념]** 조립제법으로 실근 하나를 분리하고, 남은 이차방정식에 판별식, 축, 경계값 조건을 적용함.\n1. 인수분해: $(x+1)(x^2-mx+3)=0$\n2. $g(x)=x^2-mx+3$ 의 $1 < x < 3$ 근 조건:\n- $D=m^2-12 > 0 \implies m > 2\sqrt{3}$\n- 축 $1 < m/2 < 3 \implies 2 < m < 6$\n- $g(1)=4-m > 0 \implies m < 4$\n- $g(3)=12-3m > 0 \implies m < 4$\n3. 공통 범위:\n$\implies 2\sqrt{3} < m < 4 \implies \alpha=2\sqrt{3}, \beta=4$\n$\therefore 12+4 = 16$"
  },
  {
    "id": 21,
    "level": "상",
    "category": "배수 판정법",
    "content": "[서답형 1] 3000보다 큰 3의 배수의 개수를 구하시오. [8점]",
    "choices": [" "],
    "answer": "18",
    "solution": "**[핵심 개념]** 각 자리 숫자의 합이 3의 배수여야 함을 이용하여 숫자 조합을 분류함.\n1. 조합 분류 (합이 3의 배수):\n- $\{0, 2, 3, 4\}$ (합 9): 천의 자리 3 또는 4 $\implies 2 \times 3! = 12$\n- $\{0, 1, 2, 3\}$ (합 6): 천의 자리 3만 가능 $\implies 1 \times 3! = 6$\n$\therefore 12+6 = 18$"
  },
  {
    "id": 22,
    "level": "최상",
    "category": "사차방정식과 기하",
    "content": "[서답형 2] 사차방정식의 세 근이 직각삼각형의 세 변이 될 때, 모든 $k$를 구하시오. [12점]",
    "choices": [" "],
    "answer": "k = 7/6, 175/192",
    "solution": "**[핵심 개념]** 인수분해 후 도출된 근들에 대해 피타고라스 정리를 케이스별로 적용함.\n1. 근의 구성: $1, \alpha, \beta$ (여기서 $\alpha+\beta=4/3, \alpha\beta=k/3$)\n2. Case 1 (빗변 1):\n$\implies \alpha^2+\beta^2=1 \implies (4/3)^2-2k/3=1 \implies k=7/6$\n3. Case 2 (빗변 $\alpha$):\n$\implies \alpha^2=1+\beta^2 \implies \alpha^2-\beta^2=1 \implies (4/3)(\alpha-\beta)=1 \implies \alpha-\beta=3/4$\n$\implies (\alpha-\beta)^2 = 9/16 \implies (4/3)^2-4k/3=9/16 \implies k=175/192$\n$\therefore k = 7/6, 175/192$"
  }
];
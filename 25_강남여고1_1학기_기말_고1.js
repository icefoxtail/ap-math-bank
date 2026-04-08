/**
 * 2024_강남여고1_1학기_기말_고1
 * AP수학 마스터 엔진 v7.0 [강력검증] 완료
 * 특징: 시스템 안정성을 위한 영문 필드명(Key) 유지 및 [핵심 개념] 기반의 논리적 해설 최적화
 */

window.questionBank = [
  {
    "id": 1,
    "level": "하",
    "category": "다항식의 전개와 경우의 수",
    "content": "$(a+b)(x+y+z)$를 전개할 때, 항의 개수는? (3.5점)",
    "choices": ["4", "6", "8", "9", "10"],
    "answer": "②",
    "solution": "**[핵심 개념]** 다항식의 전개에서 항의 개수는 각 다항식에서 항을 하나씩 선택하는 곱의 법칙과 같음.\n1. 각 다항식의 항 개수 확인:\n$\implies (a+b)$의 항 개수: 2개\n$\implies (x+y+z)$의 항 개수: 3개\n2. 곱의 법칙 적용:\n$\implies 2 \\times 3 = 6$\n$\therefore 6$"
  },
  {
    "id": 2,
    "level": "하",
    "category": "순열",
    "content": "5명의 농구 선수 중에서 3명을 뽑아 일렬로 세우는 경우의 수는? (3.5점)",
    "choices": ["20", "30", "60", "90", "120"],
    "answer": "③",
    "solution": "**[핵심 개념]** 서로 다른 $n$개에서 $r$개를 택하여 일렬로 나열하는 순열 $_nP_r$을 이용함.\n1. 식 수립:\n$\implies _5P_3$\n2. 계산 과정:\n$\implies 5 \\times 4 \\times 3 = 60$\n$\therefore 60$"
  },
  {
    "id": 3,
    "level": "하",
    "category": "순열과 조합의 계산",
    "content": "$_3C_2 + _5P_2$의 값을 구하면? (3.5점)",
    "choices": ["21", "23", "25", "27", "30"],
    "answer": "②",
    "solution": "**[핵심 개념]** 순열과 조합의 정의를 이용하여 함숫값을 계산함.\n1. 각 항의 값 계산:\n$\implies _3C_2 = _3C_1 = 3$\n$\implies _5P_2 = 5 \\times 4 = 20$\n2. 최종 계산:\n$\implies 3 + 20 = 23$\n$\therefore 23$"
  },
  {
    "id": 4,
    "level": "하",
    "category": "연립일차부등식",
    "content": "부등식 $3x < x+4 < 4x+7$ 의 해가 $a < x < b$일 때, $b-a$의 값은? (3.5점)",
    "choices": ["3", "5", "7", "9", "11"],
    "answer": "①",
    "solution": "**[핵심 개념]** $A < B < C$ 꼴의 연립부등식은 $A < B$와 $B < C$의 공통 범위를 구하여 해결함.\n1. 왼쪽 부등식 풀이:\n$\implies 3x < x+4 \implies 2x < 4 \implies x < 2$\n2. 오른쪽 부등식 풀이:\n$\implies x+4 < 4x+7 \implies -3 < 3x \implies x > -1$\n3. 공통 범위:\n$\implies -1 < x < 2$이므로 $a=-1, b=2$\n$\therefore b-a = 2 - (-1) = 3$"
  },
  {
    "id": 5,
    "level": "하",
    "category": "이차함수의 최대최소",
    "content": "이차함수 $y=x^2-2x+10$의 최솟값은? (3.6점)",
    "choices": ["6", "7", "8", "9", "10"],
    "answer": "④",
    "solution": "**[핵심 개념]** 이차함수를 표준형으로 변형하여 꼭짓점의 $y$좌표를 확인함.\n1. 식 변형:\n$\implies y = (x^2-2x+1) + 9 = (x-1)^2 + 9$\n2. 분석:\n$\implies$ 아래로 볼록한 포물선이며 꼭짓점이 $(1, 9)$임.\n$\therefore$ 최솟값은 9"
  },
  {
    "id": 6,
    "level": "중",
    "category": "절댓값을 포함한 일차부등식",
    "content": "부등식 $|2x-5| < x+1$을 만족시키는 모든 정수 $x$의 개수는? (3.6점)",
    "choices": ["4개", "5개", "6개", "7개", "8개"],
    "answer": "①",
    "solution": "**[핵심 개념]** 절댓값 부등식 $|f(x)| < g(x)$는 $-g(x) < f(x) < g(x)$의 관계를 이용함.\n1. 식 수립:\n$\implies -(x+1) < 2x-5 < x+1$ (단, $x+1 > 0$)\n2. 연립부등식 풀이:\n$\implies -x-1 < 2x-5 \implies 3x > 4 \implies x > 4/3$\n$\implies 2x-5 < x+1 \implies x < 6$\n3. 공통 범위:\n$\implies 4/3 < x < 6$\n$\implies$ 만족하는 정수 $x$: $2, 3, 4, 5$\n$\therefore 4$개"
  },
  {
    "id": 7,
    "level": "하",
    "category": "행렬의 연산",
    "content": "두 행렬 $A=\\begin{pmatrix}2 & 3 \\\\ 1 & 4\\end{pmatrix}$, $B=\\begin{pmatrix}1 & 2 \\\\ 2 & 1\\end{pmatrix}$에 대하여 $2(X-A) = X+B$를 만족시키는 행렬 $X$를 구하면? (3.6점)",
    "choices": ["$\\begin{pmatrix}2 & 7 \\\\ 6 & 3\\end{pmatrix}$", "$\\begin{pmatrix}12 & -18 \\\\ -2 & 10\\end{pmatrix}$", "$\\begin{pmatrix}7 & 5 \\\\ 6 & 3\\end{pmatrix}$", "$\\begin{pmatrix}5 & -2 \\\\ 3 & -1\\end{pmatrix}$", "$\\begin{pmatrix}5 & 8 \\\\ 4 & 9\\end{pmatrix}$"],
    "answer": "⑤",
    "solution": "**[핵심 개념]** 행렬의 대수적 성질을 이용해 식을 정리한 후 행렬의 합과 실배수를 연산함.\n1. 행렬 방정식 정리:\n$\implies 2X - 2A = X + B \implies X = 2A + B$\n2. 행렬 대입:\n$\implies X = 2\\begin{pmatrix}2 & 3 \\\\ 1 & 4\\end{pmatrix} + \\begin{pmatrix}1 & 2 \\\\ 2 & 1\\end{pmatrix} = \\begin{pmatrix}4 & 6 \\\\ 2 & 8\\end{pmatrix} + \\begin{pmatrix}1 & 2 \\\\ 2 & 1\\end{pmatrix}$\n$\therefore X = \\begin{pmatrix}5 & 8 \\\\ 4 & 9\\end{pmatrix}$"
  },
  {
    "id": 8,
    "level": "중상",
    "category": "이차부등식",
    "content": "이차함수 $f(x)=x^2-4x-21$에 대하여 $f(x+1) < 0$을 만족시키는 모든 정수 $x$의 합은? (3.8점)",
    "choices": ["6", "7", "8", "9", "10"],
    "answer": "④",
    "solution": "**[핵심 개념]** 이차함수의 평행이동 관계를 이해하거나 식을 직접 대입하여 부등식을 해결함.\n1. $f(x)$ 분석:\n$\implies f(x) = (x-7)(x+3) < 0 \implies -3 < x < 7$\n2. 평행이동 적용:\n$\implies f(x+1)$은 $y=f(x)$를 $x$축 방향으로 $-1$만큼 평행이동한 것임.\n$\implies -3-1 < x < 7-1 \implies -4 < x < 6$\n3. 정수 합 계산:\n$\implies -3-2-1+0+1+2+3+4+5$\n$\therefore 9$"
  },
  {
    "id": 9,
    "level": "중",
    "category": "이차함수의 대칭성",
    "content": "이차함수 $y=ax^2+bx+c$의 그래프가 점 $(1,0)$을 지나고 꼭짓점의 $x$좌표가 $-2$이다. $x$에 대한 이차방정식 $ax^2+bx+c=0$의 서로 다른 두 실근을 $\\alpha, \\beta$라 할 때, $|\\alpha - \\beta|$의 값은? (3.8점)",
    "choices": ["4", "5", "6", "7", "8"],
    "answer": "③",
    "solution": "**[핵심 개념]** 이차함수의 그래프는 대칭축에 대하여 선대칭임을 이용하여 두 실근 사이의 거리를 구함.\n1. 대칭축 확인:\n$\implies$ 축의 방정식 $x=-2$\n2. 한 실근과의 거리:\n$\implies$ 실근 $x=1$과 축 사이의 거리: $|1 - (-2)| = 3$\n3. 다른 실근 도출:\n$\implies$ 축으로부터 반대 방향으로 $3$만큼 이동: $x = -2 - 3 = -5$\n4. 두 실근의 차:\n$\therefore |1 - (-5)| = 6$"
  },
  {
    "id": 10,
    "level": "중상",
    "category": "이차연립방정식과 도형의 위치관계",
    "content": "$x, y$에 관한 연립방정식 $\\begin{cases} x+y=a \\\\ x^2+y^2=8 \\end{cases}$ 가 오직 한 쌍의 중근을 가질 때 $a$의 값은? (3.8점)",
    "choices": ["$a=-2$", "$a=4$", "$a=-2$ 또는 $a=2$", "$a=-\\sqrt{2}$ 또는 $a=\\sqrt{2}$", "$a=-4$ 또는 $a=4$"],
    "answer": "⑤",
    "solution": "**[핵심 개념]** 일차식을 이차식에 대입하여 얻은 이차방정식의 판별식이 $0$이어야 함.\n1. 대입 및 정리:\n$\implies y = a-x \\implies x^2 + (a-x)^2 = 8$\n$\implies 2x^2 - 2ax + a^2 - 8 = 0$\n2. 판별식 조건 ($D=0$):\n$\implies D/4 = (-a)^2 - 2(a^2 - 8) = 0$\n$\implies -a^2 + 16 = 0 \\implies a^2 = 16$\n$\therefore a = \\pm 4$"
  },
  {
    "id": 11,
    "level": "중상",
    "category": "경로 탐색",
    "content": "네 지점을 연결하는 도로에서 $B$와 $C$를 연결하는 도로를 $x$개 추가하여 $A$에서 $D$로 가는 총 경우의 수가 128일 때, $x$의 값은? (4점)",
    "choices": ["4", "6", "8", "10", "12"],
    "answer": "③",
    "solution": "**[핵심 개념]** 각 지점 사이의 경로를 거치는 사건들을 분류하여 합의 법칙과 곱의 법칙을 적용함.\n1. 기존 경로 분류:\n$\implies A \\to B \\to D: 3 \\times 4 = 12$\n$\implies A \\to C \\to D: 2 \\times 2 = 4$\n2. 추가 도로($x$) 포함 경로:\n$\implies A \\to B \\to C \\to D: 3 \\times x \\times 2 = 6x$\n$\implies A \\to C \\to B \\to D: 2 \\times x \\times 4 = 8x$\n3. 방정식 수립:\n$\implies 16 + 14x = 128 \\implies 14x = 112$\n$\therefore x = 8$"
  },
  {
    "id": 12,
    "level": "중상",
    "category": "행렬의 성분 정의",
    "content": "이차 정사각행렬 $A$의 성분이 $a_{ij} = (-1)^{i} + 4j + 1$일 때, $b_{ij} = a_{ji}$인 행렬 $B$를 구하면? (4.2점)",
    "choices": ["$\\begin{pmatrix} 9 & 12 \\\\ 10 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 9 \\\\ 10 & 13 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 12 \\\\ 9 & 13 \\end{pmatrix}$", "$\\begin{pmatrix} 6 & 9 \\\\ 12 & 11 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 6 \\\\ 8 & 10 \\end{pmatrix}$"],
    "answer": "⑤",
    "solution": "**[핵심 개념]** 정의된 성분 규칙에 따라 행렬 $A$를 구성한 후 행과 열을 바꾸어 전치행렬 $B$를 구함.\n1. 행렬 $A$ 성분 계산:\n$\implies a_{11} = -1+4+1=4, a_{12} = -1+8+1=8$\n$\implies a_{21} = 1+4+1=6, a_{22} = 1+8+1=10$\n2. 행렬 $B$ 구성 ($b_{ij} = a_{ji}$):\n$\implies b_{11}=a_{11}=4, b_{12}=a_{21}=6$\n$\implies b_{21}=a_{12}=8, b_{22}=a_{22}=10$\n$\therefore \\begin{pmatrix} 4 & 6 \\\\ 8 & 10 \\end{pmatrix}$"
  },
  {
    "id": 13,
    "level": "중",
    "category": "이차함수의 최대·최소",
    "content": "$-2 \\le x \\le 3$에서 $y=x^2-4x+k$의 최댓값과 최솟값의 합이 0이 되도록 하는 상수 $k$의 값은? (4.2점)",
    "choices": ["-6", "-4", "-2", "0", "2"],
    "answer": "②",
    "solution": "**[핵심 개념]** 대칭축의 위치를 파악하여 범위 내에서의 최댓값과 최솟값을 $k$에 관한 식으로 나타냄.\n1. 표준형 변형:\n$\implies y = (x-2)^2 + k-4$ (축 $x=2$)\n2. 범위 내 분석:\n$\implies$ 최솟값 ($x=2$): $m = k-4$\n$\implies$ 최댓값 ($x=-2$): $M = 16+k-4 = k+12$\n3. 조건 대입:\n$\implies M+m = 2k+8 = 0$\n$\therefore k = -4$"
  },
  {
    "id": 14,
    "level": "중상",
    "category": "대칭형 연립이차방정식",
    "content": "연립방정식 $\\begin{cases} xy=4 \\\\ 2x^2y+2xy^2+x+y=45 \\end{cases}$ 의 해에 대하여 $\\alpha^4 + \\beta^4$의 값은? (4.2점)",
    "choices": ["257", "282", "297", "313", "335"],
    "answer": "①",
    "solution": "**[핵심 개념]** 대칭식의 기본 단위인 $x+y$와 $xy$를 치환하여 연립방정식을 해결함.\n1. 식 정리:\n$\implies 2xy(x+y) + (x+y) = 45 \implies (2xy+1)(x+y) = 45$\n2. $xy=4$ 대입:\n$\implies (8+1)(x+y) = 45 \implies x+y = 5$\n3. 실근 도출:\n$\implies$ 합 5, 곱 4인 두 수는 $1, 4$임.\n4. 거듭제곱 합 계산:\n$\implies 1^4 + 4^4 = 1 + 256$\n$\therefore 257$"
  },
  {
    "id": 15,
    "level": "중상",
    "category": "순열과 합의 법칙",
    "content": "8개의 숫자 {1..8} 중 서로 다른 3개를 택해 만든 세 자리 자연수 중 각 자리 숫자의 합이 짝수인 개수는? (4.4점)",
    "choices": ["112", "128", "144", "168", "196"],
    "answer": "④",
    "solution": "**[핵심 개념]** 세 수의 합이 짝수가 되기 위한 (짝,짝,짝) 또는 (짝,홀,홀)의 케이스를 분류하여 순열을 구함.\n1. 구성 요소:\n$\implies$ 짝수: {2, 4, 6, 8} (4개), 홀수: {1, 3, 5, 7} (4개)\n2. Case 1 (짝수 3개):\n$\implies _4P_3 = 4 \\times 3 \\times 2 = 24$\n3. Case 2 (짝수 1개, 홀수 2개):\n$\implies$ 숫자 선택: $_4C_1 \\times _4C_2 = 4 \\times 6 = 24$\n$\implies$ 나열하기: $24 \\times 3! = 144$\n4. 합산:\n$\therefore 24 + 144 = 168$"
  },
  {
    "id": 16,
    "level": "상",
    "category": "행렬의 거듭제곱",
    "content": "행렬 $A=\\begin{pmatrix}0 & 1 \\\\ -1 & a\\end{pmatrix}$가 $A^2 = A - E$를 만족할 때, $A^{2026}$의 모든 성분의 합은? (4.4점)",
    "choices": ["-3", "-2", "-1", "1", "2"],
    "answer": "③",
    "solution": "**[핵심 개념]** 행렬 방정식의 특성다항식을 이용하여 거듭제곱의 주기성을 파악함.\n1. 계수 확인:\n$\implies$ 케일리-해밀턴 정리 비교를 통해 $a=1$임을 알 수 있음.\n2. 주기성 도출:\n$\implies A^2 - A + E = O$ 의 양변에 $A+E$를 곱하면 $A^3+E=O \\implies A^3 = -E$\n$\implies A^6 = E$ (주기 6)\n3. 차수 축소:\n$\implies 2026 = 6 \\times 337 + 4 \\implies A^{2026} = A^4 = A^3 \\cdot A = -A$\n4. 성분 합 계산:\n$\implies -A = \\begin{pmatrix} 0 & -1 \\\\ 1 & -1 \\end{pmatrix}$\n$\therefore 0 + (-1) + 1 + (-1) = -1$"
  },
  {
    "id": 17,
    "level": "상",
    "category": "절댓값 부등식과 이차부등식",
    "content": "$|x+1| + |x-2| \\le 5$의 해와 $ax^2+bx+c \\le 0$의 해가 같을 때, $\\tf{bc}{a^2}$의 값은? (4.5점)",
    "choices": ["-6", "-4", "2", "4", "6"],
    "answer": "⑤",
    "solution": "**[핵심 개념]** 절댓값 구간별 풀이로 구한 해를 경계값으로 하여 이차부등식을 작성함.\n1. 절댓값 부등식 해 구하기:\n$\implies -2 \\le x \\le 3$ (구간별 분석 결과)\n2. 이차부등식 작성:\n$\implies a(x+2)(x-3) \\le 0 \implies a(x^2 - x - 6) \\le 0$ (단, $a>0$)\n3. 계수 비교:\n$\implies b = -a, c = -6a$\n4. 구하는 값 계산:\n$\implies \\tf{(-a)(-6a)}{a^2} = \\tf{6a^2}{a^2}$\n$\therefore 6$"
  },
  {
    "id": 18,
    "level": "최상",
    "category": "이차함수의 기하적 활용",
    "content": "$y=x^2-4x$와 $y=-2x+3$의 교점 $A, B$와 대칭점 $C, D$로 이루어진 두 삼각형의 넓이 비 $S:T = a:b$일 때 $a+b$는? (4.5점)",
    "choices": ["2", "4", "6", "8", "10"],
    "answer": "②",
    "solution": "**[핵심 개념]** 대칭축을 이용해 점의 좌표를 확정하고, 높이가 같은 삼각형의 넓이 비는 밑변의 비와 같음을 이용함.\n1. 교점 추출:\n$\implies x^2-4x = -2x+3 \implies A(-1, 5), B(3, -3)$\n2. 대칭성 활용 (축 $x=2$):\n$\implies C(5, 5), D(1, -3)$\n3. 밑변의 길이 비교:\n$\implies BD = 3-1 = 2, AC = 5-(-1) = 6$\n4. 넓이 비 도출:\n$\implies S:T = BD:AC = 2:6 = 1:3$\n$\therefore a+b = 4$"
  },
  {
    "id": 19,
    "level": "최상",
    "category": "연립일차부등식 추론",
    "content": "연립부등식의 정수 해의 합이 $-3$이 되도록 하는 정수 $a$의 $M-m$의 값은? (4.6점)",
    "choices": ["2", "3", "4", "5", "6"],
    "answer": "①",
    "solution": "**[핵심 개념]** 정수 해의 집합을 특정하고 부등식의 경계 조건에서 등호 포함 여부를 엄밀히 따짐.\n1. 범위 수립:\n$\implies \\tf{a+2}{3} < x < 3$\n2. 정수 집합 특정:\n$\implies$ 합이 $-3$인 집합: {2, 1, 0, -1, -2, -3}\n3. 경계값 제어:\n$\implies -4 \\le \\tf{a+2}{3} < -3$\n$\implies -14 \\le a < -11 \\implies a \\in \\{-14, -13, -12\\}$\n$\therefore M-m = -12 - (-14) = 2$"
  },
  {
    "id": 20,
    "level": "최상",
    "category": "이차함수와 선분의 길이",
    "content": "$y=-x^2+4x$와 $y=x$ 사이 선분 $PQ$의 최대 길이를 이용하여 $m+n+p+q$를 구하시오. (4.8점)",
    "choices": ["12", "14", "16", "18", "21"],
    "answer": "④",
    "solution": "**[핵심 개념]** 두 함수의 $y$좌표 차를 새로운 함수로 정의하여 최댓값을 구함.\n1. 차이 함수 정의:\n$\implies L(t) = (-t^2+4t) - t = -t^2+3t$\n2. 최대 지점 분석:\n$\implies$ 축 $t = 3/2$ 일 때 최대값 발생함.\n$\implies L(3/2) = 9/4$\n3. 값 합산:\n$\implies m=2, n=3, p=4, q=9$\n$\therefore 2+3+4+9 = 18$"
  },
  {
    "id": 21,
    "level": "중",
    "category": "나머지정리와 삼차방정식",
    "content": "[서답형 1] $f(x)=x^3+px+q$의 나머지 조건을 이용해 $p, q$와 세 근의 곱을 구하시오. (4점)",
    "choices": [" ", " ", " ", " ", " "],
    "answer": "$p=-5, q=2$, 곱 $-2$",
    "solution": "**[핵심 개념]** 나머지정리로 미지수를 결정하고 근과 계수의 관계를 통해 근의 곱을 추출함.\n1. 조건 대입:\n$\implies f(2)=0, f(-2)=4$\n$\implies 8+2p+q=0, -8-2p+q=4$\n2. 연립 결과:\n$\implies p=-5, q=2$\n3. 근의 곱 계산:\n$\implies -q/1 = -2$\n$\therefore p=-5, q=2$, 세 근의 곱 $-2$"
  },
  {
    "id": 22,
    "level": "최상",
    "category": "연립이차부등식의 추론",
    "content": "[서답형 2] 연립부등식의 해가 $4 < x \\le 6$이 되도록 하는 정수 $a$의 개수를 구하시오. (5점)",
    "choices": [" ", " ", " ", " ", " "],
    "answer": "8",
    "solution": "**[핵심 개념]** 이차부등식을 인수분해하여 정적인 범위와 동적인 범위의 교집합이 목표 해와 일치하도록 $a$를 조절함.\n1. 범위 분석:\n$\implies x < -3, x > 4$ 그리고 $(x-6)(x-(a-1)) \\le 0$\n2. 조건 부합 조건:\n$\implies -3 \\le a-1 \\le 4 \implies -2 \\le a \\le 5$\n3. 개수 산출:\n$\implies 5 - (-2) + 1 = 8$\n$\therefore 8$"
  },
  {
    "id": 23,
    "level": "중상",
    "category": "조건을 만족하는 조합",
    "content": "[서답형 3] 신발 구매 케이스 $a$와 특수 조건 케이스 $b$에 대하여 $a-b$의 값을 구하시오. (5점)",
    "choices": [" ", " ", " ", " ", " "],
    "answer": "16",
    "solution": "**[핵심 개념]** 중복 없는 조합의 선택과 이미 고정된 요소를 제외한 나머지 선택의 차이를 이해함.\n1. $a$ 구하기:\n$\implies _4C_2 \\times _4C_2 = 36$\n2. $b$ 구하기:\n$\implies 5$종류 고정, 남은 $6$종 중 $3$종 선택: $_6C_3 = 20$\n3. 차이 계산:\n$\therefore 16$"
  },
  {
    "id": 24,
    "level": "최상",
    "category": "행렬 방정식의 조작",
    "content": "[서답형 4] 행렬 $A$의 다항식 관계와 벡터 변환 값을 이용해 성분의 합을 구하시오. (6점)",
    "choices": [" ", " ", " ", " ", " "],
    "answer": "6",
    "solution": "**[핵심 개념]** 선형 변환의 스칼라 배 성질과 행렬의 거듭제곱 보정을 이용하여 연산을 수행함.\n1. 벡터 분석:\n$\implies \\begin{pmatrix} -9 \\\\ 6 \\end{pmatrix} = -3 A \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ 활용함.\n2. 식 변형:\n$\implies -3A^2 \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = -3(A-E) \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$\n3. 최종 계산:\n$\implies -3 \\begin{pmatrix} 2 \\\\ -4 \\end{pmatrix} = \\begin{pmatrix} -6 \\\\ 12 \\end{pmatrix}$\n$\therefore 6$"
  }
];
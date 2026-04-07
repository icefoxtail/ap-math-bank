// 20_풍덕중2_1학기_중간_중2 수학 중간고사 데이터베이스
const questionBank = [
    {
        level: "하",
        category: "순환소수의 표현",
        content: "다음 중에서 순환소수의 표현으로 옳지 않은 것은? [4점]",
        choices: ["$4.545454\\dots = 4.\\dot{5}\\dot{4}$", "$0.232323\\dots = 0.\\dot{2}\\dot{3}$", "$0.333\\dots = 0.\\dot{3}$", "$0.0272727\\dots = 0.0\\dot{2}\\dot{7}$", "$2.374374374\\dots = 2.37\\dot{4}$"],
        answer: "⑤",
        solution: "⑤ $2.374374374\\dots$의 순환마디는 $3, 7, 4$이므로 $2.\\dot{3}7\\dot{4}$로 나타내야 옳습니다."
    },
    {
        level: "하",
        category: "유한소수 판별",
        content: "다음 <보기> 중 유한소수로 나타낼 수 있는 것을 모두 고른 것은? [4점]<br><div style='border:1px solid #000; padding:5px;'>ㄱ. $\\tf{1}{2^3 \\times 5}$ &nbsp; ㄴ. $\\tf{33}{2 \\times 3 \\times 5^2}$ <br> ㄷ. $\\tf{1}{2 \\times 7}$ &nbsp; ㄹ. $\\tf{21}{140}$</div>",
        choices: ["ㄱ, ㄴ", "ㄱ, ㄹ", "ㄴ, ㄹ", "ㄱ, ㄴ, ㄹ", "ㄱ, ㄴ, ㄷ, ㄹ"],
        answer: "④",
        solution: "ㄱ. 분모 소인수가 $2, 5$뿐이므로 유한소수입니다.<br>ㄴ. $\\tf{33}{2 \\times 3 \\times 5^2} = \\tf{11}{2 \\times 5^2}$ (유한소수)<br>ㄷ. 분모에 $7$이 있어 무한소수입니다.<br>ㄹ. $\\tf{21}{140} = \\tf{3}{20} = \\tf{3}{2^2 \\times 5}$ (유한소수). 따라서 ㄱ, ㄴ, ㄹ입니다."
    },
    {
        level: "중",
        category: "순환소수가 되는 조건",
        content: "분수 $\\tf{7}{5^2 \\times x}$를 순환소수로만 나타낼 수 있을 때, $10$ 이하의 자연수 $x$가 될 수 있는 모든 수들의 합을 구하면? [4점]",
        choices: ["17", "18", "19", "20", "21"],
        answer: "②",
        solution: "순환소수가 되려면 기약분수의 분모에 $2, 5$ 이외의 소인수가 있어야 합니다.<br>$10$ 이하 자연수 중 $3, 6, 7, 9$를 검토하면:<br>- $x=3, 6, 9$일 때 분모에 $3$이 남아 순환소수가 됩니다.<br>- $x=7$일 때는 분자의 $7$과 약분되어 유한소수가 됩니다.<br>따라서 $3+6+9 = 18$입니다."
    },
    {
        level: "하",
        category: "순환소수의 분수 표현",
        content: "순환소수 $x=0.2\\dot{2}\\dot{7}$을 $10$의 거듭제곱을 이용하여 분수로 나타내려고 할 때, 가장 편리한 식은? [4점]",
        choices: ["$100x - x$", "$100x - 10x$", "$1000x - x$", "$1000x - 10x$", "$1000x - 100x$"],
        answer: "④",
        solution: "$1000x = 227.2727\\dots$, $10x = 2.2727\\dots$ 이므로 소수점 아래 부분을 일치시키기 위해 $1000x - 10x$를 이용합니다."
    },
    {
        level: "중",
        category: "유리수와 소수 관계",
        content: "다음 중 옳은 것을 모두 고르면? (정답 2개) [4점]",
        choices: ["모든 순환소수는 유리수이다.", "유한소수와 무한소수는 유리수이다.", "분수로 나타낼 수 없는 순환소수도 있다.", "모든 기약분수는 유한소수로 나타낼 수 있다.", "정수가 아닌 유리수는 유한소수 또는 순환소수로 나타낼 수 있다."],
        answer: "①, ⑤",
        solution: "① 모든 순환소수는 분수 표현이 가능하므로 유리수입니다.<br>② 무한소수 중 비순환 무한소수는 무리수입니다.<br>③ 모든 순환소수는 유리수입니다.<br>④ $\\tf{1}{3}$과 같은 기약분수는 유한소수가 될 수 없습니다.<br>⑤ 정수가 아닌 유리수는 유한소수이거나 순환소수가 됩니다."
    },
    {
        level: "중",
        category: "지수법칙",
        content: "다음 <보기> 중 식을 간단히 한 결과가 옳은 것은 모두 몇 개인가? [4점]<br><div style='border:1px solid #000; padding:5px;'>ㄱ. $a^3 \\times a = a^4$ <br> ㄴ. $(a^3)^2 = a^6$ <br> ㄷ. $a^3 \\div a^5 = a^2$ <br> ㄹ. $(-\\tf{a^2}{b^3})^2 = \\tf{a^4}{b^6}$ <br> ㅁ. $(a^4)^2 \\times (b^2)^3 = a^{14}$</div>",
        choices: ["1개", "2개", "3개", "4개", "5개"],
        answer: "③",
        solution: "ㄱ. $a^{3+1}=a^4$ (참)<br>ㄴ. $a^{3 \\times 2}=a^6$ (참)<br>ㄷ. $a^3 \\div a^5 = \\tf{1}{a^2}$ (거짓)<br>ㄹ. $(-\\tf{1}{1})^2 \\tf{a^4}{b^6} = \\tf{a^4}{b^6}$ (참)<br>ㅁ. $a^8 b^6$ (거짓). 옳은 것은 ㄱ, ㄴ, ㄹ 총 3개입니다."
    },
    {
        level: "중",
        category: "지수법칙 응용",
        content: "$3^3 = A$라고 할 때, $\\tf{1}{81^3}$을 $A$를 사용하여 나타내면? [4점]",
        choices: ["$\\tf{1}{A^3}$", "$A^3$", "$\\tf{1}{A^4}$", "$A^4$", "$\\tf{1}{A^5}$"],
        answer: "③",
        solution: "$81^3 = (3^4)^3 = 3^{12} = (3^3)^4 = A^4$. 따라서 $\\tf{1}{81^3} = \\tf{1}{A^4}$입니다."
    },
    {
        level: "중",
        category: "지수법칙 미지수 구하기",
        content: "다음 조건을 모두 만족시키는 세 자연수에 대해 $a+b+c$의 값을 구하면? [4점]<br>(1) $(\\tf{2}{3^a})^5 = \\tf{2^5}{3^{20}}$ <br>(2) $(\\tf{7^a}{5^2})^4 = \\tf{7^c}{5^b}$",
        choices: ["22", "24", "26", "28", "30"],
        answer: "④",
        solution: "(1) $5a = 20 \\Rightarrow a=4$<br>(2) $c = 4a = 16, b = 2 \\times 4 = 8$<br>$a+b+c = 4+8+16 = 28$입니다."
    },
    {
        level: "하",
        category: "단항식의 계산",
        content: "다음 중 계산 결과가 옳지 않은 것은? [4점]",
        choices: ["$4x^2 \\times (-5x^3) = 20x^5$", "$3x^3 \\times (-xy^2) = -3x^4y^2$", "$(3x^2)^2 \\div (-27x^{11}) = -\\tf{1}{3x^7}$", "$12x^4 \\div \\tf{4}{3}x^3 = 9x$", "$9x^2 \\times 4x^3 \\div 6x^4 = 6x$"],
        answer: "①",
        solution: "① $4x^2 \\times (-5x^3) = -20x^5$가 되어야 하므로 옳지 않습니다."
    },
    {
        level: "중",
        category: "단항식의 계산 활용",
        content: "삼각형의 넓이가 $50x^2y^8$이고 밑변의 길이가 $20x^3y$일 때, 이 삼각형의 높이를 구하면? [4점]",
        choices: ["$4x^3y^8$", "$4x^4y^8$", "$5x^2y^2$", "$5x^3y^8$", "$\\tf{5y^7}{x}$"],
        answer: "⑤",
        solution: "$S = \\tf{1}{2} \\times \\text{밑변} \\times \\text{높이}$ 이므로,<br>$50x^2y^8 = \\tf{1}{2} \\times 20x^3y \\times h = 10x^3y \\times h$<br>$h = \\tf{50x^2y^8}{10x^3y} = \\tf{5y^7}{x}$ 입니다."
    },
    {
        level: "하",
        category: "이등변삼각형의 성질",
        content: "$\\overline{AB} = \\overline{AC}$인 이등변삼각형 ABC에서 $\\angle C$의 외각의 크기가 $130^\\circ$일 때, $\\angle A$의 크기는? [4점]",
        choices: ["$60^\\circ$", "$50^\\circ$", "$65^\\circ$", "$70^\\circ$", "$80^\\circ$"],
        answer: "⑤",
        solution: "$\\angle C = 180^\\circ - 130^\\circ = 50^\\circ$ 입니다. 이등변삼각형이므로 $\\angle B = \\angle C = 50^\\circ$ 입니다.<br>따라서 $\\angle A = 180^\\circ - (50^\\circ + 50^\\circ) = 80^\\circ$ 입니다."
    },
    {
        level: "중",
        category: "이등변삼각형의 성질",
        content: "$\\overline{AB} = \\overline{AC}$인 이등변삼각형에서 $\\angle B$의 이등분선과 $\\overline{AC}$의 교점을 D라 하자. $\\angle A = 36^\\circ$일 때 다음 중 옳지 않은 것은? [4점]",
        choices: ["$\\angle ABD = 36^\\circ$", "$\\angle BDC = 72^\\circ$", "$\\angle ADB = 112^\\circ$", "$\\overline{AD} = \\overline{BD}$", "$\\overline{BD} = \\overline{BC}$"],
        answer: "③",
        solution: "$\\angle B = \\angle C = \\tf{180-36}{2} = 72^\\circ$. $\\angle ABD = 36^\\circ$이므로 $\\triangle ABD$는 $\\overline{AD}=\\overline{BD}$인 이등변삼각형입니다.<br>$\\triangle BCD$에서 $\\angle BDC = 180 - (36+72) = 72^\\circ$이므로 $\\overline{BD}=\\overline{BC}$입니다.<br>③ $\\angle ADB = 180 - 72 = 108^\\circ$가 되어야 합니다."
    },
    {
        level: "하",
        category: "피타고라스 정리",
        content: "직각삼각형 ABC에서 직각을 낀 두 변의 길이가 각각 $6, 8$일 때, 빗변 $x$의 길이는? [4점]",
        choices: ["8", "10", "12", "14", "16"],
        answer: "②",
        solution: "$x^2 = 6^2 + 8^2 = 36 + 64 = 100 \\Rightarrow x = 10$ 입니다."
    },
    {
        level: "중",
        category: "피타고라스 정리 활용",
        content: "직각삼각형 ABC의 세 변을 한 변으로 하는 세 정사각형 AFGB, IBHC, ACDE를 그렸다. AFGB의 넓이가 $46\\text{cm}^2$, IBHC의 넓이가 $25\\text{cm}^2$일 때, ACDE의 넓이는? [4점]",
        choices: ["$14\\text{cm}^2$", "$16\\text{cm}^2$", "$18\\text{cm}^2$", "$21\\text{cm}^2$", "$23\\text{cm}^2$"],
        answer: "④",
        solution: "빗변 위 정사각형 넓이는 나머지 두 변 위 정사각형 넓이의 합과 같습니다. (빗변이 AB인 경우)<br>$46 = AC^2 + 25 \\Rightarrow AC^2 = 21$. 따라서 넓이는 $21\\text{cm}^2$입니다."
    },
    {
        level: "하",
        category: "삼각형의 분류",
        content: "삼각형의 세 변의 길이가 다음과 같을 때, 예각삼각형인 것은? [4점]",
        choices: ["2, 2, 3", "2, 3, 4", "3, 4, 5", "4, 5, 6", "5, 12, 13"],
        answer: "④",
        solution: "가장 긴 변 $c$에 대해 $c^2 < a^2 + b^2$이면 예각삼각형입니다.<br>④ $6^2=36, 4^2+5^2=41$. $36 < 41$이므로 예각삼각형입니다."
    },
    {
        level: "중",
        category: "삼각형의 내심",
        content: "점 I는 $\\triangle ABC$의 내심이고, $\\angle BIC = 110^\\circ$일 때, $\\angle A$의 크기는? [4점]",
        choices: ["$37^\\circ$", "$40^\\circ$", "$45^\\circ$", "$50^\\circ$", "$55^\\circ$"],
        answer: "②",
        solution: "내심 각도 성질: $\\angle BIC = 90^\\circ + \\tf{1}{2}\\angle A$.<br>$110^\\circ = 90^\\circ + \\tf{1}{2}\\angle A \\Rightarrow 20^\\circ = \\tf{1}{2}\\angle A \\Rightarrow \\angle A = 40^\\circ$ 입니다."
    },
    {
        level: "중",
        category: "삼각형의 내심 활용",
        content: "점 I는 $\\triangle ABC$의 내심이다. $\\triangle ABC$의 둘레가 $22\\text{cm}$이고 $\\overline{AD}=4\\text{cm}, \\overline{DB}=5\\text{cm}$일 때, $\\overline{EC}$의 길이는? [4점]",
        choices: ["$2\\text{cm}$", "$2.5\\text{cm}$", "$3\\text{cm}$", "$3.5\\text{cm}$", "$4\\text{cm}$"],
        answer: "①",
        solution: "내심 접점 성질: $\\overline{AD}=\\overline{AF}=4, \\overline{BD}=\\overline{BE}=5, \\overline{CE}=\\overline{CF}=x$.<br>둘레: $2(4+5+x) = 22 \\Rightarrow 9+x = 11 \\Rightarrow x = 2$. 따라서 $2\\text{cm}$입니다."
    },
    {
        level: "하",
        category: "삼각형의 외심",
        content: "점 O가 $\\triangle ABC$의 외심일 때, $\\angle OAB = 30^\\circ, \\angle OAC = 40^\\circ$이다. $\\angle OBC$의 크기는? [4점]",
        choices: ["$20^\\circ$", "$25^\\circ$", "$30^\\circ$", "$35^\\circ$", "$40^\\circ$"],
        answer: "①",
        solution: "외심 성질: $\\angle OAB + \\angle OBC + \\angle OCA = 90^\\circ$.<br>$30^\\circ + x + 40^\\circ = 90^\\circ \\Rightarrow x = 20^\\circ$ 입니다."
    },
    {
        level: "상",
        category: "일차부등식",
        content: "일차부등식 $x+1 \\le 3(x-3)$의 해가 일차부등식 $5x-a \\le 4x+2$의 해와 같을 때, $a$의 값은? (수식 보정됨) [5점]",
        choices: ["3", "2", "1", "0", "-1"],
        answer: "①",
        solution: "(1) $x+1 \\le 3x-9 \\Rightarrow 10 \\le 2x \\Rightarrow x \\ge 5$<br>(2) $x \\le a+2$ 형태이므로 원문 수식 오류 가능성이 큼. 보정하여 $a+2=5 \\Rightarrow a=3$입니다."
    },
    {
        level: "중",
        category: "삼각형의 성질",
        content: "삼각형의 성질에 대한 설명으로 옳은 것은? [4점]",
        choices: ["내심에서 세 꼭짓점에 이르는 거리는 같다.", "외심에서 세 변에 이르는 거리는 같다.", "정삼각형의 내심과 외심은 일치한다.", "이등변삼각형의 외심은 항상 삼각형 내부에 있다.", "직각삼각형의 내심은 빗변의 중점에 있다."],
        answer: "③",
        solution: "① 외심에 대한 설명입니다. ② 내심에 대한 설명입니다. ④ 둔각삼각형의 외심은 외부에 있습니다. ⑤ 외심에 대한 설명입니다. ③ 정삼각형은 내심과 외심이 일치합니다."
    },
    {
        level: "중",
        category: "순환소수의 자릿수",
        content: "[서술형 1] 순환소수 $0.\\dot{1}5384\\dot{6}$에 대하여 다음 물음에 답하시오. (1) 순환마디를 구하고, (2) 소수점 아래 $100$번째 자리의 숫자를 구하시오. [5점]",
        choices: ["<br><br><br><br>", " ", " ", " ", " "],
        answer: "8",
        solution: "(1) 순환마디는 $153846$입니다. (2) 마디의 길이는 $6$입니다. $100 \\div 6 = 16$ 나머지 $4$. 따라서 순환마디의 4번째 숫자인 $8$입니다."
    },
    {
        level: "중",
        category: "단항식의 계산",
        content: "[서술형 2] 단항식 $A$에 $2a^2b$를 나누어야 할 것을 잘못하여 곱하였더니 $16a^4b^3$이 되었다. 바르게 계산한 답을 구하시오. [6점]",
        choices: ["<br><br><br><br>", " ", " ", " ", " "],
        answer: "$4b$",
        solution: "$A \\times 2a^2b = 16a^4b^3 \\Rightarrow A = 8a^2b^2$ 입니다. 바르게 계산하면 $8a^2b^2 \\div 2a^2b = 4b$ 입니다."
    },
    {
        level: "중상",
        category: "삼각형의 내심과 외심",
        content: "[서술형 3] $\\angle C=90^\\circ$인 직각삼각형 ABC에서 외접원과 내접원의 반지름의 길이를 각각 구하시오. ($\\overline{AB}=20, \\overline{AC}=12, \\overline{BC}=16$) [5점]",
        choices: ["<br><br><br><br>", " ", " ", " ", " "],
        answer: "외:10, 내:4",
        solution: "(1) 외접원: 빗변의 중점이 외심이므로 반지름 $R = 20/2 = 10\\text{cm}$.<br>(2) 내접원: 넓이 $S = \\tf{1}{2} \\times 16 \\times 12 = 96$. 또한 $S = \\tf{1}{2}r(12+16+20) = 24r$. $24r = 96 \\Rightarrow r = 4\\text{cm}$입니다."
    },
    {
        level: "하",
        category: "삼각형의 외심의 정의",
        content: "[서술형 4] 세 나무로부터 거리가 같은 보물이 묻힌 곳의 위치를 찾는 방법을 서술하시오. [4점]",
        choices: ["<br><br><br><br>", " ", " ", " ", " "],
        answer: "외심 찾기",
        solution: "세 나무를 꼭짓점으로 하는 삼각형의 **외심**을 찾으면 됩니다. 즉, 세 나무가 이루는 삼각형의 각 변의 **수직이등분선의 교점**이 보물의 위치가 됩니다."
    }
];
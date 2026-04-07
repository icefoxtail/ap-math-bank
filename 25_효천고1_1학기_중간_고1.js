/**
 * [데이터셋] 25_순천효천고1_1학기_중간_고1
 * AP수학 마스터 엔진 v7.2.1 [IRONCLAD] 무결성 대응 버전
 * 수정사항: 전역 변수화(window.questionBank), 줄바꿈 태그(<br>) 적용
 */

window.questionBank = [
    {
        id: 1,
        content: "다항식 $x(x+3)(x^{2}-ax+a)$의 전개식에서 $x^3$의 계수와 $x^2$의 계수가 서로 같을 때, 상수 $a$의 값은? [3.5점]",
        options: ["$-3$", "$-2$", "$-1$", "$0$", "$1$"],
        answer: "①",
        solution: "**[공략 포인트]** 다항식 전체를 전개하기보다는 필요한 차수($x^3, x^2$)의 항이 나오는 조합만 골라 계산하면 빠르고 정확하다.<br><br>(1) 식을 두 부분으로 나누어 전개 준비를 한다.<br>$\\Rightarrow (x^2+3x)(x^2-ax+a)$<br><br>(2) $x^3$ 항이 나오는 경우를 찾는다.<br>$\\Rightarrow x^2 \\times (-ax) = -ax^3$<br>$\\Rightarrow 3x \\times x^2 = 3x^3$<br>$\\Rightarrow$ 따라서 $x^3$의 계수는 $3-a$이다.<br><br>(3) $x^2$ 항이 나오는 경우를 찾는다.<br>$\\Rightarrow x^2 \\times a = ax^2$<br>$\\Rightarrow 3x \\times (-ax) = -3ax^2$<br>$\\Rightarrow$ 따라서 $x^2$의 계수는 $a-3a = -2a$이다.<br><br>(4) 두 계수가 같다는 방정식을 세운다.<br>$\\Rightarrow 3-a = -2a$<br>$\\Rightarrow a = -3$<br>$\\therefore -3$"
    },
    {
        id: 2,
        content: "다항식 $f(x)$를 $x+2$로 나눈 나머지가 $3$일 때, 다항식 $x^{2}f(x)$를 $x+2$로 나눈 나머지는? [3.5점]",
        options: ["$10$", "$12$", "$14$", "$16$", "$18$"],
        answer: "②",
        solution: "**[공략 포인트]** 나머지 정리에 의해 다항식 $P(x)$를 $x-k$로 나눈 나머지는 $P(k)$임을 이용한다.<br><br>(1) $f(x)$를 $x+2$로 나눈 나머지가 $3$이라는 조건을 수식으로 바꾼다.<br>$\\Rightarrow f(-2) = 3$<br><br>(2) 구하고자 하는 다항식은 $g(x) = x^2f(x)$이다. 이를 $x+2$로 나눈 나머지는 $g(-2)$를 구하는 것과 같다.<br>$\\Rightarrow g(-2) = (-2)^2 \\times f(-2)$<br><br>(3) 이미 알고 있는 $f(-2)=3$을 대입한다.<br>$\\Rightarrow 4 \\times 3 = 12$<br>$\\therefore 12$"
    },
    {
        id: 3,
        content: "[중상] 다항식 $f(x)=x^{3}+ax^{2}+bx-2$가 $(x+1)^{2}$으로 나누어떨어질 때, $f(x)$를 $(x+3)$으로 나눈 나머지는? [4점]",
        options: ["$20$", "$10$", "$0$", "$-10$", "$-20$"],
        answer: "⑤",
        solution: "**[공략 포인트]** '나누어떨어진다'는 것은 인수로 가진다는 뜻이다. 완전제곱식으로 나누어떨어질 때는 조립제법을 두 번 연속 사용하여 나머지가 모두 0임을 이용하면 쉽다.<br><br>(1) $x+1$로 첫 번째 조립제법을 시행한다.<br>계수: $1, a, b, -2$에 대해 $-1$로 계산<br>$\\Rightarrow$ 나머지: $-1+a-b-2 = a-b-3 = 0 \\quad \\cdots$ (식 1)<br><br>(2) 첫 번째 몫에 대해 다시 한번 $-1$로 조립제법을 시행한다.<br>$\\Rightarrow$ 나머지: $1-(a-1)+(b-a+1) = -2a+b+3 = 0 \\quad \\cdots$ (식 2)<br><br>(3) 두 연립방정식을 풀면 $a=0, b=-3$을 얻는다.<br>$\\Rightarrow f(x) = x^3-3x-2$<br><br>(4) $f(x)$를 $x+3$으로 나눈 나머지는 $f(-3)$이다.<br>$\\Rightarrow f(-3) = (-3)^3 - 3(-3) - 2 = -27+9-2 = -20$<br>$\\therefore -20$"
    },
    {
        id: 4,
        content: "[중상] $x^{2}-kx+k-1=0$의 두 근의 비가 $1:3$이 되도록 하는 $k$의 최댓값 $M$, 최솟값 $m$에 대하여 $M-m$의 값은? [4.6점]",
        options: ["$\\tf{4}{3}$", "$\\tf{5}{3}$", "$2$", "$\\tf{7}{3}$", "$\\tf{8}{3}$"],
        answer: "⑤",
        solution: "**[공략 포인트]** 근의 비가 주어지면 두 근을 $m, 3m$과 같이 하나의 문자로 설정한 후 근과 계수의 관계를 적용한다.<br><br>(1) 두 근을 $\\alpha, 3\\alpha$라고 하자.<br><br>(2) 근과 계수의 관계(합)를 적용한다.<br>$\\Rightarrow \\alpha + 3\\alpha = k \\quad \\therefore 4\\alpha = k \\quad \\cdots$ (식 1)<br><br>(3) 근과 계수의 관계(곱)를 적용한다.<br>$\\Rightarrow \\alpha \\times 3\\alpha = k-1 \\quad \\therefore 3\\alpha^2 = k-1 \\quad \\cdots$ (식 2)<br><br>(4) (식 1)에서 $\\alpha = \\tf{k}{4}$를 (식 2)에 대입한다.<br>$\\Rightarrow 3(\\tf{k}{4})^2 = k-1$<br>$\\Rightarrow \\tf{3k^2}{16} = k-1$<br>$\\Rightarrow 3k^2 - 16k + 16 = 0$<br><br>(5) 인수분해하여 $k$값을 구한다.<br>$\\Rightarrow (3k-4)(k-4) = 0 \\quad \\therefore k = \\tf{4}{3} \\text{ 또는 } 4$<br><br>(6) $M=4, m=\\tf{4}{3}$이므로 차이를 구한다.<br>$\\Rightarrow 4 - \\tf{4}{3} = \\tf{12-4}{3} = \\tf{8}{3}$<br>$\\therefore \\tf{8}{3}$"
    },
    {
        id: 5,
        content: "[상] $(x^{2025}+1) \\div (x+1)$의 몫을 $f(x)$, 나머지를 $a$라 하자. $f(-1)=b$일 때, $a+b$의 값은? [4.7점]",
        options: ["$2025$", "$2024$", "$0$", "$-2024$", "$-2025$"],
        answer: "①",
        solution: "**[공략 포인트]** 고차식의 인수분해 공식 $x^n+1 = (x+1)(x^{n-1}-x^{n-2}+ \\cdots +1)$ (단, $n$은 홀수)을 기억해야 한다.<br><br>(1) 나머지 정리로 $a$를 먼저 구한다. $x+1=0$이 되는 $x=-1$을 대입한다.<br>$\\Rightarrow a = (-1)^{2025}+1 = -1+1 = 0$<br><br>(2) 검산식을 세워 몫 $f(x)$를 찾는다.<br>$\\Rightarrow x^{2025}+1 = (x+1)f(x) + 0$<br>$\\Rightarrow f(x) = \\tf{x^{2025}+1}{x+1} = x^{2024}-x^{2023}+x^{2022}- \\dots -x+1$<br><br>(3) $b = f(-1)$을 구하기 위해 $x=-1$을 대입한다.<br>$\\Rightarrow f(-1) = (-1)^{2024}-(-1)^{2023}+(-1)^{2022}- \\dots -(-1)+1$<br>$\\Rightarrow f(-1) = 1 - (-1) + 1 - (-1) + \\dots + 1 + 1$<br>$\\Rightarrow f(-1) = 1+1+1+ \\dots +1$<br><br>(4) 항의 개수를 세어준다. $x^0$차항(상수항)부터 $x^{2024}$차항까지이므로 항은 총 2025개이다.<br>$\\Rightarrow b = 2025$<br>$\\therefore a+b = 0 + 2025 = 2025$"
    },
    {
        id: 6,
        content: "[서술형 4/최상] $n^{4}+6n^{3}+7n^{2}-6n-3$이 소수일 때 $f(x)=x^{2}-5x+7$을 $x-n$으로 나눈 나머지는? [6점]",
        options: ["1", "2", "3", "4", "5"],
        answer: "3",
        solution: "**[공략 포인트]** 소수는 약수가 1과 자기 자신뿐인 수이다. 다항식을 인수분해했을 때 두 수의 곱이 소수가 되려면, 한쪽 인수는 반드시 1이어야 한다는 성질을 이용한다.<br><br>(1) 주어진 사차식을 조립제법으로 인수분해한다.<br>$\\Rightarrow (n^2+3n-3)(n^2+3n+1)$ 로 인수분해된다.<br><br>(2) 두 식의 곱이 소수가 되려면 작은 쪽 인수가 1이어야 한다.<br>$n$은 자연수이므로 $n^2+3n-3 < n^2+3n+1$이다.<br>$\\Rightarrow n^2+3n-3 = 1$<br>$\\Rightarrow n^2+3n-4 = 0$<br>$\\Rightarrow (n+4)(n-1) = 0 \\quad \\therefore n=1$ (자연수 조건)<br><br>(3) $n=1$을 대입하여 실제 소수인지 확인한다.<br>$\\Rightarrow (1+3-3) \\times (1+3+1) = 1 \\times 5 = 5$ (소수 맞음)<br><br>(4) $f(x)$를 $x-1$로 나눈 나머지는 $f(1)$이다.<br>$\\Rightarrow f(1) = 1^2 - 5(1) + 7 = 3$<br>$\\therefore 3$"
    }
];
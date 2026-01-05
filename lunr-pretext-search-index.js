var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-overall",
  "level": "1",
  "url": "sec-overall.html",
  "type": "Section",
  "number": "1.1",
  "title": "Overall",
  "body": " Overall  Number theory is the study of properties of integers (and rational numbers). Often, we study prime numbers   which are positive integers greater than that can be divided only by and itself.    Why are primes important?  They are the building blocks of integers. To be precise, every natural number can be written as a product of primes. This is called the Fundamental Theorem of Arithmetic.    How can we find primes?  Use sieve of Eratosthenes (pronounced \"eh-ruh-taas-thuh-neez\").    How many primes are there?  Euclid proved that there are infinitely many primes. To be more precise, he proved that given a finite number of primes , at least one of the prime divisors of will be a new prime that is not .    How many primes are there ?  Denote by the number of primes less or equal to . In general, computing is difficult, but roughly   This is called the Prime Number Theorem. Informally, this means that the chance of a random positive integer being a prime is approximately .    How can we find large primes?    Mersenne primes are primes of the form . The largest known prime is Mersenne prime    Fermat primes are primes of the form . They have connections with construction of regular polygons.      Diophantine Equations  Diophantine Equations are equations with solutions in integers (or sometimes rational numbers). For example,       (Pythagorean triples)       . Cleraly is a solution, but how can we find the solution and ?    (Fermat's Last Theorem)    The smallest answer is . Ramanujan and the taxi cab.    There is no algorithm to solve all Diophantine Equations (Hilbert's 10th problem).     Congruences    Is there a solution to ? Only possible last digit of is .    We say that if is divisible by . Roughly, we ignore multiples of . Here we used the fact that .    Suppose you have an equation , then has solution for all integer . Conversely? Only when Hasse's principle holds. For example, given $a$, solve for all $m$. Is square?    Fermat's Little Theorem: for all prime . This gives test for primes. For example, we check . If , then is NOT a prime. Cryptography depends on large primes, so testing primality is important.      Quadratic Residues  is a quadratic residue modulo if is solvable. In simpler terms, is a square modulo . If , then are quadratic residues modulo , and are not quadratic residues modulo . There is a strong connection between and called Quadratic Reciprocity. If or is , then either BOTH or NEITHER equations can be solved. If , then EXACTLY one solution can be solved. For example, is a square modulo . Then Quadratic Reciprocity says that is square modulo .    Additive Number Theory    Goldbach conjecture: Is every even number a sum of two primes?    Hardy, Littlewood, Vinogradov: Every odd number large enough is a sum of three primes. It was later proved that \"large enough\" can be .    Chen: Every sufficiently large even number can be written as the sum of either two primes or a prime and a semiprime (the product of two primes). So of the form .      Twin Prime conjecture: there are infinitely many number of primes pairs of gap $2$.    Zhang: there are infinitely many numbers of primes of gap million    Polymath, James Maynard: reduced the gap bound to        Perfect Numbers  Perfect numbers are positive integers that equal the sum of their proper divisors    and    Euclid showed that if is a prime then is perfect. This shows that every Mersenne primes corresponds to perfect numbers.    ( defines a discrete dynamical system)      Collatz's conjecture     this process will eventually reach the number $1$, regardless of which positive integer is chosen initially. (This is again a discrete dynamical system).        Analytic Number Theory    Riemann zeta function     We know few values: and , but we do not have simple expression for .    Euler's product: shows that there is a deep connection between the zeta function and number theory.    Riemann had an almost formula for : very roughly,   where the sum is over the zeros $\\rho$ of the zeta function and . The above formula is a weighted counting of prime powers with weight for .    Riemann Hypothesis conjectures that the nontrivial zeros of should have real part , i.e. .      Dirichlet's Theorem on Arithmetic Progression    There are infinitely many primes of the form where and are coprime.    We do analysis (or Calculus) on functions like     Green-Tao proved that one can find arbitrary long arithmetic progression of primes like and .        Algebraic Number Theory    Gaussian Integers are numbers of the form where and . Using these new types of numbers, we can prove that if and only if . Being able to write as a sum of squares is closely related to a prime no longer being a prime in the Gaussian integers, e.g. .      Combinatorial Number Theory    For a positive integer , a partition is an unordered list of (possibly repeating) positive integers which sum to the number. For example   The number of partitions of is denoted by . Hence .    The first few partition numbers are where starts from .    Euler considered them as a power series by   which is still not fully understood.    We know that divides .      "
},
{
  "id": "sec-basic-notation",
  "level": "1",
  "url": "sec-basic-notation.html",
  "type": "Section",
  "number": "1.2",
  "title": "Basic Notations",
  "body": " Basic Notations  The integers are numbers of the form   We use the following notations:   , the set of integers.  , the set of positive integers.  , the set of non-negative integers.  , the set of negative integers.   "
},
{
  "id": "sec-basic-notation-2",
  "level": "2",
  "url": "sec-basic-notation.html#sec-basic-notation-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integers "
},
{
  "id": "sec-well-ordering",
  "level": "1",
  "url": "sec-well-ordering.html",
  "type": "Section",
  "number": "1.3",
  "title": "Well Ordering Principle",
  "body": " Well Ordering Principle  ddd  "
},
{
  "id": "sec-divisibility",
  "level": "1",
  "url": "sec-divisibility.html",
  "type": "Section",
  "number": "2.1",
  "title": "Divisibility",
  "body": " Divisibility  ddd  "
},
{
  "id": "sec-euclids-theorem",
  "level": "1",
  "url": "sec-euclids-theorem.html",
  "type": "Section",
  "number": "2.2",
  "title": "Euclid’s Theorem",
  "body": " Euclid's Theorem  ddd  "
},
{
  "id": "sec-sieve-of-eratosthenes",
  "level": "1",
  "url": "sec-sieve-of-eratosthenes.html",
  "type": "Section",
  "number": "2.3",
  "title": "Sieve of Eratosthenes",
  "body": " Sieve of Eratosthenes  ddd  "
},
{
  "id": "sec-division-algorithm",
  "level": "1",
  "url": "sec-division-algorithm.html",
  "type": "Section",
  "number": "2.4",
  "title": "Division Algorithm",
  "body": " Division Algorithm  ddd  "
},
{
  "id": "sec-gcd-euclidean-algorithm",
  "level": "1",
  "url": "sec-gcd-euclidean-algorithm.html",
  "type": "Section",
  "number": "2.5",
  "title": "Greatest Common Divisor and Euclidean Algorithm",
  "body": " Greatest Common Divisor and Euclidean Algorithm  ddd  "
},
{
  "id": "sec-mersenne-fermat",
  "level": "1",
  "url": "sec-mersenne-fermat.html",
  "type": "Section",
  "number": "2.6",
  "title": "Mersenne Primes and Fermat Primes",
  "body": " Mersenne Primes and Fermat Primes  ddd  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})

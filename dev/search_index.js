var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = TheAlgorithms","category":"page"},{"location":"#TheAlgorithms","page":"Home","title":"TheAlgorithms","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for TheAlgorithms.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [TheAlgorithms]","category":"page"},{"location":"#TheAlgorithms.AbstractBinaryTree_arr","page":"Home","title":"TheAlgorithms.AbstractBinaryTree_arr","text":"array-based binary tree\n\n\n\n\n\n","category":"type"},{"location":"#TheAlgorithms.DisjointSet","page":"Home","title":"TheAlgorithms.DisjointSet","text":"This can contain a maximum of length(par) parenting-relations par is an array of Int, which is the index of the parent node.\n\n\n\n\n\n","category":"type"},{"location":"#TheAlgorithms.CompletePack!-Union{Tuple{N}, Tuple{V}, Tuple{N, V, V, V}} where {V<:(AbstractVector{T} where T), N<:Number}","page":"Home","title":"TheAlgorithms.CompletePack!","text":"This does complete/infinite (each item can be chosen infinite times) knapsack : pack capacity = capacity weight of each item = weights value of each item = values dp array is what the function works on It returns the ans (dp[capacity])\n\njulia> dp=zeros(Int,30)\njulia> CompletePack!(20,[1,2,9],[1,3,20],dp)\n43\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.ZeroOnePack!-Union{Tuple{N}, Tuple{V}, Tuple{N, V, V, V}} where {V<:(AbstractVector{T} where T), N<:Number}","page":"Home","title":"TheAlgorithms.ZeroOnePack!","text":"This does 0-1 (each item can be chosen only once) knapsack : pack capacity = capacity weight of each item = weights value of each item = values dp array is what the function works on It returns the ans (dp[capacity])\n\njulia> dp=zeros(Int,30)\njulia> ZeroOnePack!(20,[1,3,11],[2,5,30],dp)\n37\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.abs_max-Tuple{Any}","page":"Home","title":"TheAlgorithms.abs_max","text":"abs_max(x)\n\nProgram to find the max absolute value in a vector\n\nExample\n\nabs_max([1,3,4]) # returns 4\nabs_max([-3,1,2]) # returns -3\nabs_max([-7,-3,6]) #returns -7\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.abs_min-Tuple{Any}","page":"Home","title":"TheAlgorithms.abs_min","text":"abs_min(num)\n\nProgram to find the min absolute value in a vector\n\nExample\n\nabs_min([1,3,4]) # returns 1\nabs_min([-3,1,2]) # returns 1\nabs_min([-7,-3,6]) #returns -3\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.abs_val-Tuple{Any}","page":"Home","title":"TheAlgorithms.abs_val","text":"abs_val(num)\n\nProgram to find the absolute value of a number\n\nExample\n\nabs_val(-100) # returns 100\nabs_val(0) # returns 0\nabs(123.1) # returns 123.1\n-1000 == abs_val(-1000) #returns false\n1000 == abs_val(1000) #returns true\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.area_circle-Tuple{Any}","page":"Home","title":"TheAlgorithms.area_circle","text":"area_circle(radius)\n\nFinds area of the circle\n\nExample\n\narea_circle(20) # returns 1256.6370614359173\narea_circle(-1) # returns DomainError\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.area_ellipse-Tuple{Any, Any}","page":"Home","title":"TheAlgorithms.area_ellipse","text":"area_ellipse(radius_x, radius_y)\n\nFinds area of the ellipse\n\nExample\n\narea_ellipse(10, 10) # returns 314.1592653589793\narea_ellipse(10, 20) # returns 628.3185307179587\narea_ellipse(1, -2) # returns DomainError\narea_ellipse(-1, 2) # returns DomainError\narea_ellipse(-1, -2) # returns DomainError\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.area_heron_triangle-Tuple{Any, Any, Any}","page":"Home","title":"TheAlgorithms.area_heron_triangle","text":"area_heron_triangle(side1, side2, side3)\n\nFinds area of a triangle using heron's formula\n\nExample\n\narea_heron_triangle(5,12,13) # returns 30.0\narea_heron_triangle(-1,-2,1) # returns DomainError\narea_heron_triangle(1,-2,1)  # returns DomainError\narea_heron_triangle(-1,2,1)  # returns DomainError\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.area_parallelogram-Tuple{Any, Any}","page":"Home","title":"TheAlgorithms.area_parallelogram","text":"area_parallelogram(base, height)\n\nFinds area of the parallelogram\n\nExample\n\narea_parallelogram(10,20) # returns 200\narea_parallelogram(-1,-2) # returns DomainError\narea_parallelogram(1,-2)  # returns DomainError\narea_parallelogram(-1,2)  # returns DomainError\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.area_rectangle-Tuple{Any, Any}","page":"Home","title":"TheAlgorithms.area_rectangle","text":"area_rectangle(length, width)\n\nFinds area of the rectangle\n\nExample\n\narea_rectangle(10,20) # returns 200\narea_rectangle(-1,-2) # returns DomainError\narea_rectangle(1,-2)  # returns DomainError\narea_rectangle(-1,2)  # returns DomainError\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.area_rhombus-Tuple{Any, Any}","page":"Home","title":"TheAlgorithms.area_rhombus","text":"area_rhombus(diagonal_1, diagonal_2)\n\nFinds area of the rhombus\n\nExample\n\narea_rhombus(10, 20) # returns 100.0\narea_rhombus(-1,-2) # returns DomainError\narea_rhombus(1,-2)  # returns DomainError\narea_rhombus(-1,2)  # returns DomainError\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.area_square-Tuple{Any}","page":"Home","title":"TheAlgorithms.area_square","text":"area_square(side)\n\nFinds area of the area_square\n\nExample\n\narea_square(10) # returns 100\narea_square(-1) # returns DomainError\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.area_trapezium-Tuple{Any, Any, Any}","page":"Home","title":"TheAlgorithms.area_trapezium","text":"area_trapezium(base1,base2,height)\n\nFinds area of the trapizium\n\nExample\n\narea_trapezium(10, 20, 30)  # returns 450.0\narea_trapezium(-1, -2, -3)  # returns DomainError\narea_trapezium(-1, 2, 3)    # returns DomainError\narea_trapezium(1, -2, 3)    # returns DomainError\narea_trapezium(1, 2, -3)    # returns DomainError\narea_trapezium(-1, -2, 3)   # returns DomainError\narea_trapezium(1, -2, -3)   # returns DomainError\narea_trapezium(-1, 2, -3)   # returns DomainError\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.area_triangle-Tuple{Any, Any}","page":"Home","title":"TheAlgorithms.area_triangle","text":"area_triangle(base, height)\n\nFinds area of the right angled triangle with base height\n\nExample\n\narea_triangle(10,10) # returns 50.0\narea_triangle(-1,-2) # returns DomainError\narea_triangle(1,-2)  # returns DomainError\narea_triangle(-1,2)  # returns DomainError\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.ceil_val-Tuple{Any}","page":"Home","title":"TheAlgorithms.ceil_val","text":"ceil_val(x)\n\nFinds the ceiling of x as an Integer\n\nExample\n\njulia ceil_val(1.3)   # 2.0 ceil_val(2.0)   # returns 2.0 ceil_val(-1.5)  #returns -1.0`\n\nReference\n\nhttps://en.wikipedia.org/wiki/Floorandceiling_functions\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.celsius_to_fahrenheit","page":"Home","title":"TheAlgorithms.celsius_to_fahrenheit","text":"celsiustofahrenheit(celsius, ndigits::Int = 2)\n\nConverts celsius to fahrenheit and round to 2 decimal places\n\nExample\n\ncelsius_to_fahrenheit(273.354, 3) == 524.037  # returns true\ncelsius_to_fahrenheit(273.354, 0) == 524.0    # returns true\ncelsius_to_fahrenheit(-40.0) == -40.0         # returns true\ncelsius_to_fahrenheit(-20.0) == -4.0          # returns true\ncelsius_to_fahrenheit(0) == 32.0              # returns true\ncelsius_to_fahrenheit(20) == 68.0             # returns true\n\n\n\n\n\n","category":"function"},{"location":"#TheAlgorithms.celsius_to_kelvin","page":"Home","title":"TheAlgorithms.celsius_to_kelvin","text":"function celsiustokelvin(celsius, ndigits::Int = 2)\n\nConverts celsius to kelvin and round to 2 decimal places\n\nExample\n\ncelsius_to_kelvin(273.354, 3) == 546.504    # returns true\ncelsius_to_kelvin(273.354, 0) == 547.0      # returns true\ncelsius_to_kelvin(0.0) == 273.15            # returns true\ncelsius_to_kelvin(20.0) == 293.15           # returns true\n\n\n\n\n\n","category":"function"},{"location":"#TheAlgorithms.count_nucleotides-Tuple{AbstractString}","page":"Home","title":"TheAlgorithms.count_nucleotides","text":"Given: A DNA string s\n\nof length at most 1000 nt.\n\nReturn: Four integers (separated by spaces) counting the respective number of times that the symbols 'A', 'C', 'G', and 'T' occur in s\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.determinant-Tuple{Any}","page":"Home","title":"TheAlgorithms.determinant","text":"Given a non singluar matrix, calculate its determinant using LU decomposition.\n\nL and U are lower triangular and upper triangular matrices respectively such that\n\nA = L*U\n\nIf we want to find the determinant, then\n\ndet(A) = det(LU) = det(L)*det(U)\n\nDeterminant of triangualar matrices is the product of their diagonal entries. Hence, makes finding the determinant easy.\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.dna2rna-Tuple{AbstractString}","page":"Home","title":"TheAlgorithms.dna2rna","text":"Given: A DNA string t\n\nhaving length at most 1000 nt.\n\nReturn: The transcribed RNA string of t\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.euler_method","page":"Home","title":"TheAlgorithms.euler_method","text":"Calculate the solution to a differential equation using forward euler method.\n\n\n\n\n\n","category":"function"},{"location":"#TheAlgorithms.factorial_iterative-Tuple{Any}","page":"Home","title":"TheAlgorithms.factorial_iterative","text":"factorial_iterative(n)\n\nFinds factorial of a number using Iterative method\n\nExample\n\nfactorial_iterative(5)      # returns 120\nfactorial_iterative(0.1)    # returns error\nfactorial_iterative(-1)     # returns error\n\nReference\n\nfactorial of a positive integer – https://en.wikipedia.org/wiki/Factorial\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.factorial_recursive-Tuple{Any}","page":"Home","title":"TheAlgorithms.factorial_recursive","text":"factorial_recursive(n)\n\nFinds factorial of anumber using recursive method\n\nExample\n\nfactorial_recursive(5)      # returns 120\nfactorial_recursive(0.1)    # returns error\nfactorial_recursive(-1)     # returns error\n\nReference\n\nfactorial of a positive integer – https://en.wikipedia.org/wiki/Factorial\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.fahrenheit_to_celsius","page":"Home","title":"TheAlgorithms.fahrenheit_to_celsius","text":"fahrenheittocelsius(fahrenheit, ndigits::Int = 2)\n\nConverts fahrenheit to celsius and round to 2 decimal places\n\nExample\n\nfahrenheit_to_celsius(273.354, 3) == 134.086 # returns true\nfahrenheit_to_celsius(273.354, 0) == 134.0   # returns true\nfahrenheit_to_celsius(0.0) == -17.78         # returns true\nfahrenheit_to_celsius(20.0) == -6.67         # returns true\nfahrenheit_to_celsius(40.0) == 4.44          # returns true\nfahrenheit_to_celsius(60.0) == 15.56         # returns true\nfahrenheit_to_celsius(80.0) == 26.67         # returns true\n\n\n\n\n\n","category":"function"},{"location":"#TheAlgorithms.fahrenheit_to_kelvin","page":"Home","title":"TheAlgorithms.fahrenheit_to_kelvin","text":"fahrenheittokelvin(fahrenheit, ndigits::Int = 2)\n\nConverts fahrenheit to kelvin and round to 2 decimal places\n\nExample\n\nfahrenheit_to_kelvin(273.354, 3) == 407.236 # returns true\nfahrenheit_to_kelvin(273.354, 0) == 407.0   # returns true\nfahrenheit_to_kelvin(0) == 255.37           # returns true\nfahrenheit_to_kelvin(20.0) == 266.48        # returns true\nfahrenheit_to_kelvin(40.0) == 277.59        # returns true\nfahrenheit_to_kelvin(60.0) == 288.71        # returns true\nfahrenheit_to_kelvin(80.0) == 299.82        # returns true\n\n\n\n\n\n","category":"function"},{"location":"#TheAlgorithms.fcfs-Tuple{Any, Any, Any}","page":"Home","title":"TheAlgorithms.fcfs","text":"fcfs()\n\nImplementation of first come first served scheduling algorithm\n\nOutput\n\nTuple of vectors (processid, bursttime, waitingtime, turnaroundtime, avgwaitingtime, avgturnaroundtime)\n\nExample\n\nn = 3 # number of processes\nprocess_id = Any[1, 2, 3] # process ids\nburst_times = Any[3, 4, 5] # burst times\nfcfs(n, process_id, burst_times)\n\nReference\n\nhttps://en.wikipedia.org/wiki/Scheduling(computing)#Firstcome,firstserved\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.find-Tuple{DisjointSet, Int64}","page":"Home","title":"TheAlgorithms.find","text":"Find the ancestor of node x.\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.floor_val-Tuple{Any}","page":"Home","title":"TheAlgorithms.floor_val","text":"floor_val(x)\n\nFinds the floor of x as an Integer\n\nExample\n\njulia floor_val(1.3)  # 1 floor_val(2.0)  # returns 2.0 floor_val(-1.7) # returns -2.0`\n\nReference\n\nhttps://en.wikipedia.org/wiki/Floorandceiling_functions\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.is_armstrong-Tuple{Any}","page":"Home","title":"TheAlgorithms.is_armstrong","text":"Program to check if a number is an Armstrong/Narcissistic number in decimal system.\n\nArmstrong number is a number that is the sum of its own digits raised to the power of the number of digits.\n\nContributed By:- Ashwani Rathee\n\nA positive integer is called an Armstrong number (of order n) if\n\nabcd... = a^n + b^n + c^n + d^n +.... \n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.kelvin_to_celsius","page":"Home","title":"TheAlgorithms.kelvin_to_celsius","text":"function kelvintocelsius(kelvin, ndigits::Int = 2)\n\nConverts kelvin to celsius and round to 2 decimal places\n\nExample\n\nkelvin_to_celsius(273.354, 3) == 0.204   # returns true\nkelvin_to_celsius(273.354, 0) == 0.0     # returns true\nkelvin_to_celsius(273.15) == 0.0         # returns true\nkelvin_to_celsius(300) == 26.85          # returns true\n\n\n\n\n\n","category":"function"},{"location":"#TheAlgorithms.kelvin_to_fahrenheit","page":"Home","title":"TheAlgorithms.kelvin_to_fahrenheit","text":"function kelvintofahrenheit(kelvin, ndigits::Int = 2)\n\nConverts kelvin to fahrenheit and round to 2 decimal places\n\nExample\n\nkelvin_to_fahrenheit(273.354, 3) == 32.367  # returns true\nkelvin_to_fahrenheit(273.354, 0) == 32.0    # returns true\nkelvin_to_fahrenheit(273.15) == 32.0        # returns true\nkelvin_to_fahrenheit(300) == 80.33          # returns true\n\n\n\n\n\n","category":"function"},{"location":"#TheAlgorithms.line_length","page":"Home","title":"TheAlgorithms.line_length","text":"Approximates the arc length of a line segment by treating the curve as a sequence of linear lines and summing their lengths.\n\nArguments:\n\nf: function that returns the arc\nx_start: starting x value\nxend: ending xvalue\nsteps: steps to take for accurace, more the steps greater the accuracy\n\n\n\n\n\n","category":"function"},{"location":"#TheAlgorithms.lu_decompose-Tuple{Any}","page":"Home","title":"TheAlgorithms.lu_decompose","text":"Decomposes a n x n non singular matrix into a lower triangular matrix (L) and an upper triangular matrix (U)\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.mean-Tuple{Any}","page":"Home","title":"TheAlgorithms.mean","text":"mean(nums)\n\nFind mean of a vector of numbers\n\nExample\n\nmean([3, 6, 9, 12, 15, 18, 21])      # returns 12.0\nmean([5, 10, 15, 20, 25, 30, 35])    # returns 20.0\nmean([1, 2, 3, 4, 5, 6, 7, 8])       # returns 4.5\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.median-Tuple{Any}","page":"Home","title":"TheAlgorithms.median","text":"median(nums)\n\nFinds median of a vector of numbers\n\nExample\n\nmedian([2,1,3,4])                   # returns 2.5\nmedian([2, 70, 6, 50, 20, 8, 4])    # returns 8\nmedian([0])                         # returns 0\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.mode-Tuple{Any}","page":"Home","title":"TheAlgorithms.mode","text":"mode(nums)\n\nFinds mode of a vector of numbers\n\nExample\n\nmode([2, 3, 4, 5, 3, 4, 2, 5, 2, 2, 4, 2, 2, 2])        # returns [2]\nmode([3, 4, 5, 3, 4, 2, 5, 2, 2, 4, 4, 2, 2, 2])        # returns [2]\nmode([3, 4, 5, 3, 4, 2, 5, 2, 2, 4, 4, 4, 2, 2, 4, 2])  # returns [2, 4]\nmode([\"x\", \"y\", \"y\", \"z\"])                              # returns [\"y\"]\nmode([\"x\", \"x\" , \"y\", \"y\", \"z\"])                       # returns [\"x\", \"y\"]\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.perfect_cube-Tuple{Any}","page":"Home","title":"TheAlgorithms.perfect_cube","text":"perfect_cube(number)\n\nCheck if a number is a perfect cube or not.\n\nExample\n\nperfect_cube(27) # returns true\nperfect_cube(4)  # returns false\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.perfect_number-Tuple{Any}","page":"Home","title":"TheAlgorithms.perfect_number","text":"perfect_number(number)\n\nChecks if a number is a perfect_number number or not\n\nDetails\n\nperfect_number number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.\n\nFor example : 6 is perfect_number number\n\nDivisors of 6 => [1,2,3]\n\nSum of divisors => 1+2+3 = 6\n\n6 == sum(divisors) # which is true\n\nExample\n\nperfect_number(27)     # returns false\nperfect_number(28)     # returns true\nperfect_number(496)    # returns true\nperfect_number(8128)   # returns true\nperfect_number(123)    # returns false\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.perfect_square-Tuple{Any}","page":"Home","title":"TheAlgorithms.perfect_square","text":"perfect_square(number)\n\nCheck if a number is a perfect square or not.\n\nExample\n\nperfect_square(9)   # returns True\nperfect_square(16)  # returns True\nperfect_square(1)   # returns True\nperfect_square(0)   # returns True\nperfect_square(10)  # returns False\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.prime_check-Tuple{Any}","page":"Home","title":"TheAlgorithms.prime_check","text":"prime_check(number)\n\nChecks to see if a number is a prime or not\n\nA number is prime if it has exactly two factors: 1 and itself.\n\nExample\n\nprime_check(2) # returns true\nprime_check(3) # returns true\nprime_check(5) # returns true\nprime_check(7) # returns true\nprime_check(11) # returns true\nprime_check(13) # returns true\nprime_check(17) # returns true\nprime_check(19) # returns true\nprime_check(23) # returns true\nprime_check(29) # returns true\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.prime_factors-Tuple{Any}","page":"Home","title":"TheAlgorithms.prime_factors","text":"prime_factors(number)\n\nReturns prime factors of number as a vector\n\nExample\n\nprime_factors(50)          # returns [2,5,5]\nprime_factors(0)           # returns []\nprime_factors(100)         # returns [2, 2, 5, 5]\nprime_factors(2560)        # returns [2, 2, 2, 2, 2, 2, 2, 2, 2, 5]\nprime_factors(10^-2)       # returns []\nprime_factors(0.02)        # returns []\nprime_factors(10^-354)     # returns []\nprime_factors(\"hello\")     # returns error\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.rotation_matrix-Tuple{Any}","page":"Home","title":"TheAlgorithms.rotation_matrix","text":"A 2D Rotation matrix is a mtrix that rotates a vector in a 2D real space by an angle theta. For more info: https://en.wikipedia.org/wiki/Rotation_matrix\n\nThis function takes the angle theta in radians as input and returns a 2D Matrix which will rotate the the vector by angle theta.\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.sum_ap-Tuple{Any, Any, Any}","page":"Home","title":"TheAlgorithms.sum_ap","text":"sum_ap(first_term, diff, num_terms)\n\nFinds sum of a arithmetic progression series\n\nInput parameters\n\nfirst_term : first term of the series\ndiff       : common difference between consecutive terms\nnum_terms  : number of terms in the series till which we count sum\n\nExample\n\nsum_ap(1, 1, 10)    # returns 55.0 \nsum_ap(1, 10, 100)  # returns 49600.0\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.sum_gp-Tuple{Any, Any, Any}","page":"Home","title":"TheAlgorithms.sum_gp","text":"sum_gp(first_term, ratio, num_terms)\n\nFinds sum of n terms in a geometric progression\n\nInput parameters\n\nfirst_term : first term of the series\nraio      : common ratio between consecutive terms -> a2/a1 or a3/a2 or a4/a3\nnum_terms  : number of terms in the series till which we count sum\n\nExample\n\nsum_gp(1, 2, 10)    # 1023.0\nsum_gp(1, 10, 5)    # 11111.0\nsum_gp(0, 2, 10)    # 0.0\nsum_gp(1, 0, 10)    # 1.0\nsum_gp(1, 2, 0)     # -0.0\nsum_gp(-1, 2, 10)   # -1023.0\nsum_gp(1, -2, 10)   # -341.0\n\nContributed By:- Ashwani Rathee\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.surfarea_cube-Tuple{Any}","page":"Home","title":"TheAlgorithms.surfarea_cube","text":"surfarea_cube(side)\n\nFinds surface area of a cube\n\nExample\n\nsurfarea_cube(1)  # returns 6\nsurfarea_cube(3)  # returns 54\nsurfarea_cube(-1) # returns DomainError\n\n\n\n\n\n","category":"method"},{"location":"#TheAlgorithms.surfarea_sphere-Tuple{Any}","page":"Home","title":"TheAlgorithms.surfarea_sphere","text":"surfarea_sphere(side)\n\nFinds surface area of a sphere\n\nExample\n\nsurfarea_sphere(5)  # returns 314.1592653589793\nsurfarea_sphere(1)  # returns 12.566370614359172\nsurfarea_sphere(-1) # returns DomainError\n\n\n\n\n\n","category":"method"}]
}

"""
    exp_logn(x::Number, n::Int)

Recursive function which calculates 'x' to the power of 'n' in O(log n) complexity.

# Arguments:
- `x` : Base
- `n` : Exponent

# Examples/Tests
```julia
exp_logn(0, 5)    # returns 0
exp_logn(3.14, 0) # returns 1
exp_logn(2, 5)    # returns 32
exp_logn(2, -2)   # returns 0.25
exp_logn(2, -5)   # returns 0.03125
```

Contributed by [Nikola Mircic](https://www.github.com/Nikola-Mircic)
"""

function exp_logn(x::Number, n::Int)
    if n == 0
        return 1
    elseif n < 0
        return 1/exp_logn(x, -n)
    else
        tmp = exp_logn(x, div(n,2))
        
        if n%2 == 0
            # If n is even, x^n = x^(n/2) * x^(n/2)
            return tmp * tmp
        else
            # else, x^n = x^(n/2) * x^(n/2) * x
            return tmp * tmp * x
        end
    end
end

println(exp_logn(0, 5))
println(exp_logn(3.14, 0))
println(exp_logn(2, 5))
println(exp_logn(2, -2))
println(exp_logn(2, -5))
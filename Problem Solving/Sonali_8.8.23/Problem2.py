# *	*	*	*	*	*	*
# 	*				*
# 		*		*
# 			*
# 		*	*	*
# 	*	*	*	*	*
# *	*	*	*	*	*	*

n = 7

for i in range(n):
    s = ''
    for j in range(n):
        if (i == 0 or i == (n - 1)):
            s += '* '
        elif (i == j or j == (n - i - 1)):
            s += '* '
        elif (i > (n // 2) and j < i and j > (n - i - 1)):
            s += '* '
        else:
            s += '  '
    print(s)


from pandas import read_csv
from matplotlib import pyplot
from numpy import log
series = read_csv('../Data/international-airline-passengers.csv', header=0, index_col=0)
X = series.values
X = log(X)
split = round(len(X) / 2)
X1, X2 = X[0:split], X[split:]
mean1, mean2 = X1.mean(), X2.mean()
var1, var2 = X1.var(), X2.var()
print('mean1=%f, mean2=%f' % (mean1, mean2))
print('variance1=%f, variance2=%f' % (var1, var2))
x=input("\nCan I proceed")


from pandas import read_csv
from matplotlib import pyplot
series = read_csv('../Data/daily-total-female-births.csv', header=0, index_col=0)
series.plot()
pyplot.show()


from pandas import read_csv
from matplotlib import pyplot
series = read_csv('../Data/international-airline-passengers.csv', header=0, index_col=0)
series.plot()
pyplot.show()

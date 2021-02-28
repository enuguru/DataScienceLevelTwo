import numpy as np
from pandas import read_csv
from matplotlib import pyplot
import statsmodels as sm
from statsmodels.tsa.seasonal import seasonal_decompose
series = read_csv('AirPassengers.csv', header=0, index_col=0)
result = seasonal_decompose(np.asarray(series), freq=3)
#result = seasonal_decompose(series, model='multiplicative')
result.plot()
pyplot.show()

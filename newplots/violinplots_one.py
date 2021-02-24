
# library & dataset
import matplotlib.pyplot as plt
import seaborn as sns
df = sns.load_dataset('iris')

# Just switch x and y
sns.violinplot( y=df["species"], x=df["sepal_length"] )
plt.show()


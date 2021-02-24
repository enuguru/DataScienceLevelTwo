
# library & dataset
import seaborn as sns
import matplotlib.pyplot as plt
df = sns.load_dataset('iris')

# Make boxplot for one group only
sns.violinplot( y=df["sepal_length"] )
plt.show()


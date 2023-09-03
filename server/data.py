#import libraries
import psycopg2
import numpy as np
import pandas as pd
import json

param_dic = {
    "host"      : "localhost",
    "database"  : "Biodata",
    "user"      : "postgres",
    "password"  : "1loveP3ter"
}

def connect(params_dic):
    """ Connect to the PostgreSQL database server """
    conn = None
    try:
        # connect to the PostgreSQL server
        print('Connecting to the PostgreSQL database...')
        conn = psycopg2.connect(**params_dic)
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
        sys.exit(1) 
    print("Connection successful")
    return conn

conn = connect(param_dic)

query = """SELECT * FROM obsidian.file
           ORDER BY path ASC"""

def postgresql_to_dataframe(conn, query):

  cursor = conn.cursor()

  try:
    cursor.execute(query)

  except (Exception, psycopg2.DatabaseError) as error:
    print("Error: %s" % error)
    cursor.close()
    return

  results = cursor.fetchall()

  # Get column names
  columns = [desc[0] for desc in cursor.description]

  cursor.close()

  df = pd.DataFrame(results, columns=columns)

  return df

# Pass in conn 
df = postgresql_to_dataframe(conn, query)

# Extract 'path' column
path_col = df['path'] 

# Construct new DataFrame from JSON data
data = df['dataview_data']
sample = data.iloc[0]
new_cols = list(sample.keys())
parsed_df = pd.DataFrame(data.tolist(), columns=new_cols)

def get_parsed_df():
  df = postgresql_to_dataframe(conn, query)

  path_col = df['path']

  data = df['dataview_data']
  sample = data.iloc[0]
  new_cols = list(sample.keys())
  
  parsed_df = pd.DataFrame(data.tolist(), columns=new_cols) 
  parsed_df = parsed_df.set_index(path_col)

  return parsed_df




                             




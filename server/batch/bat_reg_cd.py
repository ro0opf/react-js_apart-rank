# Date: 2020-07-12
# @author : Hyunjin Park
# @PGM desc : 지역코드가 저장된 csv 파일을 불러와 DB에 저장

import csv
import pymysql
# AUDIT_ID : bat_reg_cd

# Login 정보 파일 입출력
# git.ignroe 파일에 Login 정보 제외 처리
# oracle_client 경로 파일 입출력 처리 


# Maria DB Connection
apt_db = pymysql.connect(
    user='root', 
    passwd='1129', 
    host='127.0.0.1', 
    db='apt', 
    charset='utf8'
)

cur = apt_db.cursor(pymysql.cursors.DictCursor)

print ('현진')

# Read Region Code
f = open('resource/region_code5.csv', 'r', encoding='utf-8'  )
rdr = csv.reader(f)

bat_id = 'bat_reg_cd'
print(rdr)

for line in rdr:

    sql_insert = 'INSERT INTO apt_region_spc VALUES(%s, %s, SYSDATE(), %s)'

    #column명 제외
    if 'region' in line[0] :
        continue
    else:
        region_cd = line[1]
        region_nm = line[0]
        cur.execute(sql_insert, (region_cd, region_nm, bat_id))
apt_db.commit()
f.close()	


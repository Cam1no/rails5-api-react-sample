class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name, null: false, comment: 'FIRST NAME'
      t.string :last_name, null: false, comment: 'LAST NAME'
      t.integer :gender, null: false, comment: '性別'
      t.timestamps
    end
  end
end

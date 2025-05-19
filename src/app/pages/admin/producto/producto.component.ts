import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  displayedColumns: string[] = [
    'id', 'imagen', 'nombre', 'descripcion',
    'stock', 'precio', 'marca',
    'tipo_botella', 'tipo_bebida', 'acciones'
  ];

  productosEjemplo = [
    {
      id: '01',
      imagen: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBAQDxEWEhUTExAPEBEPGA8REBAQFxIXFhUXFxMYHSggGBslJxUTITEiJikrLi4uGB8zOD8tNygtLisBCgoKDg0OGxAQGi4lICUtLi8tLS03LTctLy4tKy4tLi0tLisvMCstLS0tLS4vNy0tLS0tLSstKy0tLS43LS0rMv/AABEIAQAAxQMBEQACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABBEAACAgECAwQGBgcHBQEAAAAAAQIDEQQhBRIxE0FRcQYHImGBkRQyQqGx0SMkNFKSweEVQ2Jyc4KyU8LS8PEz/8QAGwEBAQADAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA3EQEAAQMBBAYIBgEFAAAAAAAAAQIDEQQSITFRBUFhcaHRBhMUIoGRscEyM0JSU/BiFUOi4fH/2gAMAwEAAhEDEQA/AJxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANL496w6tPbOmNUrJQfLJ5UY83fjxOWvVU0ziIfQaToC7ftxcqqiInh1sdT61K+bE9NJLxjKLx8MGPtkdcOir0arx7tyPk3/SaiNlcLIbxnGM4+TWUdcTmMw+au26rdc0VcYnCsVgAAAAAAAAAAAAAAAAAAAAAAAAEE+kuklLU6qahLHazaajZJv2vBJnnV2JmqZy+y03TVu3ZotxEziIjqhjp8Pm5y5YN4S2jXdFdF3yz+Iq08zO6WdPTlFMe9TPzifJOXor+xaZNNNVQTUtmmlho7rcYpiHyesuRcv1108JmZZUzcwAAAAAAAAAAAAAAAAAAAAAAAAa1xrh9ts7eWVcF7Kg5V9q846tZXfnvMZjLOmYjix2l4TqIuUu1pm8ZinR2XTH2lJmOJWaqZ4R4t0rey8kbGt6AAAAAAAAAAAAAAAAAAAAAAAAPkpYWQMZrLOVPvb3ZFW2n1O+6/8AhMmGX00tsfLyMkVgAAAAAAAAAAAAAAAAAAAAAAAChbPLx4bsgw+tfTPflkVR0/Ugyelsa+G/w7zJGRi8rKKPoAAAAAAAAAAAAAAAAAAAAAFrxLX10Vuy2cYRW3NNpLLAwnDvSnS22dlVdGyWHKShzPC722lsYrhgeL+negrbU73HE5V7wt+tFtNdO7DAsKvWPw3K/WfHrCaXTPVogznD/Tvh8oO1amKjnkzJSXtfLzLkwy/AvSTTXzdVN8Jvqop+1jyZYGfKgAAAAAAAAAAAAAAAAAAAACIPXVxtuyrRwf1V2k/N9PzCo84NQpNuy7sKVvZNNpyS7kluyK1jjmthZKDqyoqMsqXVSds34+DgVixqkBsno5xCHLPT3yxXa8YaXKpbYfN9mXhlYe6eMkWGb4Vq7OH6utyeeylGUXviVbfd8AOl9LerIQsjupxUl5NZKiqAAAAAAAAAAAAAAAAAAAADmP044k7tfqbM9bJQXuiny/yA1biN0nHGdl3dxcGVlw6dSti9TCc69+eNTUZvbbDfvwQlRvhiWUmotJx5sZxjr80wKkXtjxwBn4652UV1zeZ1r2JPGeR/Zz342EwuXQ/qs4j23DKW3vXzVP8A2vYI24AAAAAAAAAAAAAAAAAAAPM+j8mBylxbRXdrbiDftz8P3ma5v24/U7qejNZVGYtysbOH3tJOt4w8YcOv8XUTqLf7mcdD62f9qfDzWcODahvar3dYfmY+02ubP/RNd/H40+a+4nwzVWdm7KorkhGtOPZxzFZxnEt3uWrU244yU9B66eFHjHmtKuDXZWYffHw8ye02uZPQuu/Z4x5rqvhdqafJ98V/Me02+Z/out/j8Y808+pOmUdDap7fpm0tv3I+BsprpqjMOK/prtirZuRif7ySGZNAAAAAAAAAAAAAAAAAAAPkujAg/wChVxV+q1EXOEbpU0Uxbi9RqG28NrdQit3jrsvPy9iIzXVz3Rzl996+5VNGnsziZpzVV+2nn3z4cWP4roG9XZTRVJv2eWuMLYv/APOLk1XLMoxb5msvo0YV0e/imHVpdREaaLl2uOvfMxznEZjdM45LThnD7rJSVdNk3DaajGTcHnGHts/cYU0VTO6HVXqbNumJrriM8MzG/uX2s4Ze+WKpnlz7CK5Ws24zyb9/V+7BnXRVONzXRq7ERMzXHDa49XPuZH+yaNI3C2K1OoXIrY5zTVOe0Kox/vLJeL2STeHjD3Rbot7p3z/d3e8arWX9X71udi3OcT1zEcap5Ux2b5nEZ64+ad6XUWW6X6PCptz+j6jT83syim32icnzV7See5fMkbFdU0YxymGVftWntU6j1k1cNqmrHCeW7dPZzSP6B01wqthS04qxLMW5LPIvtd7xhvG2W8HbZiIjEPmukrly5XTVcjfMff6cuxs5teaAAAAAAAAAAAAAAAAAAABF9lTjYnXDnekonfVB5cfpWp1ElGcl4RW7fdjO2DjxMTu6oz8Zl9PFcVUTFc4i5VFMz/hRTGYjtmd3bwU9VGSWjq0Vac9VyWWWWc1kHpoSSrjOTw+SWeZx728b5E592KI4/RbU0zN2vU1breYiIxE7UxvxHOOET1cd2GR7OVHa2QjiFEpxplYuWN2tmm79Xdtjkj7WO7ql3IzmJpzPVH165ly0VU35poqnfXjMR+miPw26e2fKZ65WvBY2U6T6SpSuu1FkqOHxs5sRc2+a3kbai5YlNvwXvZhbzTRtcZndHm7ddVbvaj1ExFNFERNyY7Me7nrxuiO2exrdHBbu2dGm1PaOc7o6q6UEo1zrS7ScbHmX9845XK28rozVFqrOzTPfP973Zc1tn1frb1vEREbEZ4xPCJiMR+nOJzEQvuCcFjXC2cJOXbuvSUdslXPllBWXZjl4WMJtdI83eZW7UUxM890fdzavXVXaqaZjGzmqrG+N04p39/znDePV9RGFeohGcp/pYzcppRk3OqM3mK6P2jpsxiJeL0pcquVUVTERuxiOyZj7NrNzywAAAAAAAAAAAAAAAAAAAIW9Ir4ysnKGqVXNF6bUVYuc5dnOSW0ViUWsPqu8827MTOdrHVL7jQW6qaYiq1tYnapndjfEc53THdJwTXaeXYU3a7V1xqlmmWKa6K5J7d82l57L3C3VROKZqnwx9zWafUU7d23YtzNUb+M1TH/Hw3rTj+pjOMo0cRnqYczslTep1ycs/WjJpRs8tsdyMbsxMYprzHKW7o63NuqKruniirGIqpxMd0xvmO/5yzmv4rVbo9DKnWV6aenqlVZCSk7Yt1xhKVcUsuXsyw/CfVG2q5TNFOKsTDht6S7a1V6Llma6a5zExw4zMRM8uGe7hLGUcU0v9n3V9pKDdsY9lu9RfRH28OXROcnJuXRdN8IkXKPVTGfOY/7Z3NJqvbaK9mJ3cf001Tu4f4xjEcZ47sshpuP6SddD1F0+f6PbXNRjZLs53WrtUn1zy7LHSK8kZxetzEbU78fVy19H6uiuuLVEbO1ExmY3xTE48d885+LcPQDVRtjq7INtSvlJZWGtl3fJ/E32aoqzMc3ldJ2arM0UVcYpbWbnlgAAAAAAAAAAAAAAAAAAAc98f/aL/wDVs/5s8a7+KX6VovyaO6PotNHSp5i5xr2bUrHiLeUsZ+LfwZKYz1t965NunMUzPdxVquExyl9Ko35Xnn2WZSWPhjPk0Z+qj90Of22qIz6qv5dkf34FWgjOMW9RVFtS9lt8yamo4x78tryMYoif1Q23dVVRMx6uqeG/4Z8ODz/ZcN/1qvbkb2nLZpNvbPTfzx8sotx+6HPOrr/iq6+X35rRw5ZNKSkk/rR6MwmMS6qapqpzMY7Et+qT9mv/ANb/ALEehpPwPjvSD8+nu+7ezqeAAAAAAAAAAAAAAAAAAAABCXpTw3mtslRW5PtbOflaknmTxjEn5Y2PNvW8zmmH3XRup2KIi7ViMRjP/jVmtmn/AIk0cr3InrhcQ43qNv0r2xjKrfTp1XuRs9bXzcnsGnz+DxnzfVxW5Zas3by3y15bxFeH+CHyMYuVc2yrR2JjE0+M9vb2yt7uI2yi4ysbi8ZWyT6LfC36L5Fm5VMYyxp0tmmqKopjMKdZi2yl71Sfs1/+qv8Agj0dJ+GXxnpD+fT3fdvZ1PAAAAAAAAAAAAAAAAAAAAA5c9L9bbXrdWlNrF92M4eFzvxNVVi3VOZh32ek9Xap2aa5xynE/Vh48btw8tPr9nv+Zh7Jb7XZHpBrY66Z+HlK0j6Q2+EPlL8zH2O32tkeker5U/KfN6l6R2+EP4Zf+Q9jt9qz6SavlT8p83l8dtffFeUfzZY0ttqq9INZPCYj4K0eJ2N/Xa38Ir8EZxp7cdTmr6Y1tfG5PwiI+ycvUTKUtLqpSbebo4zv0rWTbEREYhw3LldydquZme1JxWsAAAAAAAAAAAAAAAAAAADmT1q6Xs+K6td05q2PxiskVpkZY5s+K+8qKb06A8rTgV4ULwArUUe0sPbPR/yIro31OaXk4cnj61kpfckUlvQQAAAAAAAAAAAAAAAAAAACA/XroP12Ni2cq4vP3P8AAiovrp3y/wD1lR9kgPKAqxAu9LHdEWHTPq8o5OHadeMXL5tlglsgQAAAAAAAAAAAAAAAAAAACIfXpR7Wnn4wnH5P+pFjghqaKijMCnECsgL/AEK9pBYdSei9fLotMl/0ofhkIygAAAAAAAAAAAAAAAAAAAAIV9fmv/TaaiL3jCU5e7MtvwIqHlOWcZztnfzKijPUrLQHlalAVVqUBeaPUvKbWxFh1L6Da1XcP0tkXn9Go/FbFJZ0IAAAAAAAAAAAAAAAAAAABzd64dW58U1Kf2VCEfJR/NsitDhnL/2r7zJFlYt35v8AEg8eAFatboC9o7seRR0P6kNQ5cOcH9i2WPcpbkVIYQAAAAAAAAAAAAAAAAAAADm/1qU54lqf8zx8l+QwrR3Q1n3+JUWVmnf4/iQUlSwK8NN4sC/01CTT694wJ59R7/V9Qu5Thj+FllUlkQAAAAAAAAAAAAAAAAAAADn31v0cnEbX++oTXxj/AELCtFcMrYqLayBMDy6ugwPdVYwK/TBRO/qRoa0Vs39u3C/2x/qSRIxAAAAAAAAAAAAAAAAAAAACKfXnwKU6qtZXHPZ5rtx3Re8W/d1XxKsIPnGf2W/JGubkQ3xp6phV3aTkmn3pprfyZshzy+NlHydc2vYjLHWUknhLwz0MK6op3y2W7c1ziDS0SclGKcpNqKS3bb6YJTXlncs7MZdT+hXCPomh09EliSipWf55by/L4GTQzgAAAAAAAAAAAAAAAAAAAAPFtUZRcZpSjJNSjJJpp9zQGH0XojoaZc1Wkqi85zyqXy5s4Jsxxwz9ZVjGWE9YvoJDiFSlTy131rEJPaM4/uyx9zMolgi/S+qHiMpqM411xz7U3OMkl5LdlyJv4D6O06XS16WEFKMV7XOk+0m/rSafiYzvInCppvR7SV2drXpqoT7pxhBSXk8bEiIjgymqZ4yyZWIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==',
      nombre: 'Cola Clásica',
      descripcion: 'Bebida con gas sabor cola',
      stock: 50,
      precio: 2.5,
      marca: 'Sabrosas',
      tipo_botella: 'Plástico',
      tipo_bebida: 'Gaseosa'
    },
    {
      id:'02' ,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Bb9jSmODcipxi34Uan7mdUEe2zyk0ICGUg&s',
      nombre: 'inka cola',
      descripcion: 'cpn asucar',
      stock: 100,
      precio: 1.2,
      marca: 'Sabrosas',
      tipo_botella: 'Vidrio',
      tipo_bebida: 'gasificada'
    }
  ];

  dataSource = new MatTableDataSource(this.productosEjemplo);

  aplicarFiltro(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valor.trim().toLowerCase();
  }
}
